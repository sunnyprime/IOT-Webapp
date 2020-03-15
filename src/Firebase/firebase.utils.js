// import firebase from 'firebase/app'
import 'firebase/firebase'
import 'firebase/auth'
import * as firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyD1_ZxiXmjiErPEVfLZ16nSe50x3aluuqM",
    authDomain: "sigma-firmament-185606.firebaseapp.com",
    databaseURL: "https://sigma-firmament-185606.firebaseio.com",
    projectId: "sigma-firmament-185606",
    storageBucket: "sigma-firmament-185606.appspot.com",
    messagingSenderId: "643781148469",
    appId: "1:643781148469:web:11ce15b0431719cfc7167c",
    measurementId: "G-VNH88EM7H3"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;