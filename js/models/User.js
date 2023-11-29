import { app as firebase } from '../firebase.js';

export default class User {
  constructor(firstName, lastName, email, password) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  createUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(userCredential => {
        firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({
          firstName: userCredential.firstName,
          lastName: userCredential.lastName,
          email: userCredential.email,
        });
        console.log('success');
      })
      .catch(error => console.log(error.code, error.message));
  };
}
