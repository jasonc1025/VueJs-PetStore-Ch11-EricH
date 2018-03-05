import { initializeApp } from 'firebase';

const app = initializeApp({
    // [jwc]+x 
    // * from https://console.firebase.google.com/u/1/project/petstore-vuejs-erich/overview
    // apiKey: "",
    // authDomain: "",
    // databaseURL: "",
    // projectId: "",
    // storageBucket: "",
    // messagingSenderId: ""
    apiKey: "AIzaSyD6E9lzknrF3OdQddm5F8E2kJA7PqeReDI",
    authDomain: "petstore-vuejs-erich.firebaseapp.com",
    databaseURL: "https://petstore-vuejs-erich.firebaseio.com",
    projectId: "petstore-vuejs-erich",
    storageBucket: "petstore-vuejs-erich.appspot.com",
    messagingSenderId: "883630083470"
});

export const db = app.database();

export const productsRef = db.ref('products');
