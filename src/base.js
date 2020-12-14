import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyCBWu5WYE9Nt4IAc8W1bHUPxKD_qwK2x1U',
	authDomain: 'fit-of-the-day.firebaseapp.com',
	databaseURL: 'https://fit-of-the-day-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
