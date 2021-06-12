import { Observable } from './Observable';

export class Model1 extends Observable {
  private _age: number = 0;
  public get age(): number {
    return this._age;
  }

  public set age(value: number) {
    this._age = value;
    this.notify();
  }

  private _clickCount: number = 0;
  public get clickCount(): number {
    return this._clickCount;
  }

  public set clickCount(value: number) {
    this._clickCount = value;
    this.notify();
  }
}
