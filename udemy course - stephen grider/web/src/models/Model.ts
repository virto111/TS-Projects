import { AxiosPromise, AxiosResponse } from 'axios';
import { Callback } from './Eventing';

//* Interfaces might be as well Generics
export interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

export interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export interface Events {
  on(eventName: string, callback: Callback): void;
  trigger(eventName: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private sync: Sync<T>,
    private events: Events,
  ) {}

  //! Below will be shortened
  // get on() {
  //   return this.events.on;
  // }

  // get trigger() {
  //   return this.events.trigger;
  // }

  // get get() {
  //   return this.attributes.get;
  // }
  //! Short syntax has its downsides: https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/15067024#notes
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attributes.get;
  
  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }
  
  fetch(): void {
    //! interface HasId -> needed because this.get('id') is causing error
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    }).catch((err) => {
      console.log('Fetch Error :: ', err);
    });
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.trigger('Save');
      });
  }
}