import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyA9Sqqqy14Sk0xh-JHUmv-rkLMD21ZCf2o",
    authDomain: "rashu123-site.firebaseapp.com",
    projectId: "rashu123-site",
    storageBucket: "rashu123-site.appspot.com",
    messagingSenderId: "904706474480",
    appId: "1:904706474480:web:453029419212ec0484dd35"
  };
firebase.initializeApp(firebaseConfig)

 const projectFirestore = firebase.firestore()
 export { projectFirestore}