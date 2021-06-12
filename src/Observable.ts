import { uuidv4 } from './utils';

/**
 * Observer subject implementation.
 *
 * call subscribe to watch for changes.
 * notify is called to broadcast that a change has occoured.
 */
export class Observable {
  observers: Map<string, () => void> = new Map();
  nextID = '';
  public subscribe(notifyCallback: () => void): () => void {
    this.nextID = uuidv4();
    this.observers.set(this.nextID, notifyCallback);
    return () => this.observers.delete(this.nextID);
  }
  protected notify() {
    this.observers.forEach((x) => x());
  }
}
