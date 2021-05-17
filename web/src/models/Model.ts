import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  /*
    these are an accessor which returns the function and does not invoke it
    the get function runs inside the class and returns something for
  */
  get on() {
    return this.events.on;
  }

  get tigger() {
    return this.events.trigger;
  }

  /* 
    use this only when the constructor has assigned object,
    constructors are initialized even before any other objects are initialized
    trigger = this.events.trigger;
  */

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((reponse: AxiosResponse): void => {
      this.set(reponse.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.tigger('save');
      })
      .catch(() => {
        this.tigger('error');
      });
  }
}
