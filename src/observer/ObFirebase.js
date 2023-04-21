import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Configure Firebase.
// const config = {
//   apiKey: process.env.REACT_APP_FIRE_BASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIRE_BASE_AUTHORIZED_DOMAIN,
// };
// console.log('config', config);
// export const obFirebase = firebase.initializeApp(config);
console.log('config',  process.env.REACT_APP_FIRE_BASE_AUTHORIZED_DOMAIN);