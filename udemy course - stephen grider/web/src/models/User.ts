import { Collection } from './Collection';
import { Model } from './Model';
import { ApiSync } from './ApiSync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name?: string; 
  age?: number;
}

/*
* How to proceed with Events
? Option #1: 
* new User(data, new Eventing()) -> composition
? Option #2: using constructor and static methods
*            static fromData(data: UserProps): User {
*              cosnt user = new User(new Eventing());
*              user.set(data);
*              return user
*            }
*            constructor(private events: Eventing){} 
*   -> construcotr will recive only events and nothing else
? Option #3:
* export class User {
*   events: Eventing = new Eventing();
* }
* -> Just instantiate as property, no composition, just simple property
*/

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new ApiSync<UserProps>(rootUrl),
      new Eventing(),
    );
  }
  
  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection(
      rootUrl,
      (json: UserProps) => User.buildUser(json), 
    );
  }

  setRandomAge():void {
    const age = Math.round(Math.random() * 100);
    console.log('age :: ', age)
    //? Below is ES2015 syntax
    this.set({ age });
  }
}