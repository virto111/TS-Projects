import { UserList } from './views/UserList';
import { User, UserProps } from './models/User';

import { UserEdit } from './views/UserEdit';
import { UserForm } from './views/UserForm';
import { Collection } from './models/Collection';


const users = new Collection(
  'http://localhost:3000/users', 
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

// const root = document.getElementById('root');
// const user = User.buildUser({name: 'Name22', age: 20});

// if (root) {
//   const userEdit = new UserEdit(root, user);
//   userEdit.render();
//   // const userForm = new UserForm(root, user);
//   // userForm.render();
// }


//! manually create a User with axios
// axios.post('http://localhost:3000/users', {
//   name: 'User2',
//   age: 22,
// });

// const user = new User({id: 1});
// user.set({name: 'NameForTestSave', age: 999});
// user.save();
// user.fetch();
// const user = User.buildUser({id : 1});

// user.on('change', () => {
//   console.log(user);
// });

// user.fetch();
// user.save();
//! See below after refactor is not as NICE as ecpected!
// user.attributes.get('id')
// user.attributes.get('name')
// user.attributes.get('age')
// user.sync.save();

// user.on('change', () => console.log('user is changing'));

// const collection = User.buildUserCollection();
// collection.on('change', () => {
//   console.log(collection);
// });
// collection.fetch();
