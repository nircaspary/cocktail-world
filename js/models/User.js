import { addDocument, deleteDocument, getOneDocument } from '../firebase';

export default class User {
  constructor(id, firstName, lastName) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
  createUser = () => {
    const user = { id: this.id, firstName: this.firstName, lastName: this.lastName };
    addDocument('users', user);
  };
  deleteMe = () => deleteDocument('users', this.id);
  getMe = () => getOneDocument('users', this.id);
}
