import { Observable } from './Observable';

export class Model2 extends Observable {
  _id: string = '';
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
    this.notify();
  }
}
