import axios, { AxiosPromise } from 'axios';
// import { UserProps } from './User';

/*
* 3 Options for managing communicaitron between Sync and User classes:
* #1: Sync gets function arguments -> save(args) -> not good!
* #2: Serialsize and Deserialize
? save(id: num, serialize: Serializable): void
? fetch(id: num, deserial: Deserializable): void
* #3: Make Sync class a Generic Class -> good but a little complicated
*/

//! http://localhost:3000/users => no lasr / -> users/ -> NO!

interface HasId {
  id?: number;
}

//* T extends HasId -> Generic Contstaint
export class ApiSync<T extends HasId> {

  constructor(public rootUrl: string) {}
  
  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: T): AxiosPromise {
    //! Check whether we have User for the wanted ID!
    //* If we have => put request
    //* If we don't have => post request
    const { id } = data;
    if (id) {
      // put
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      // post
      return axios.post(`${this.rootUrl}`, data);
    }
  }
}