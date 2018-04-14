import * as firebase from 'firebase';

const prodConfig ={
    apiKey: "AIzaSyBtz_8rfA-Xj5ST02l48d17Nqi2PNylxLg",
    authDomain: "parcial2-8dda2.firebaseapp.com",
    databaseURL: "https://parcial2-8dda2.firebaseio.com",
    projectId: "parcial2-8dda2",
    storageBucket: "parcial2-8dda2.appspot.com",
    messagingSenderId: "914410979939"
};

const devConfig = {
    apiKey: "AIzaSyBt9FnIw6UvrSBPJleykAIofNwK_uqmxOs",
    authDomain: "parcial-a6619.firebaseapp.com",
    databaseURL: "https://parcial-a6619.firebaseio.com",
    projectId: "parcial-a6619",
    storageBucket: "parcial-a6619.appspot.com",
    messagingSenderId: "493232623604"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length){
    firebase.initializeApp(config);
}

const db = firebase.database();

const auth = firebase.auth();

export {
    db,
    auth,
};