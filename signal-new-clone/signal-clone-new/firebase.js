// import * as firebase from "firebase/app";
// // import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyABWBMio4dia5Ie3JGPVD30OAPSgudyL2s",
//   authDomain: "signal-cloneyt-build.firebaseapp.com",
//   projectId: "signal-cloneyt-build",
//   storageBucket: "signal-cloneyt-build.appspot.com",
//   messagingSenderId: "1091776107199",
//   appId: "1:1091776107199:web:01b19a6d3768361ec9ac0a"
// };

// const app = firebase.initializeApp(firebaseConfig);
// const db = app.firestore();
// const auth = firebase.auth();
// // const auth = app.auth();

// export { db, auth };





import firebase from "firebase/c/app";
import "firebase/c/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABWBMio4dia5Ie3JGPVD30OAPSgudyL2s",
  authDomain: "signal-cloneyt-build.firebaseapp.com",
  projectId: "signal-cloneyt-build",
  storageBucket: "signal-cloneyt-build.appspot.com",
  messagingSenderId: "1091776107199",
  appId: "1:1091776107199:web:01b19a6d3768361ec9ac0a"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };





// import * as firebase from "firebase/app";
// // import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyABWBMio4dia5Ie3JGPVD30OAPSgudyL2s",
//   authDomain: "signal-cloneyt-build.firebaseapp.com",
//   projectId: "signal-cloneyt-build",
//   storageBucket: "signal-cloneyt-build.appspot.com",
//   messagingSenderId: "1091776107199",
//   appId: "1:1091776107199:web:01b19a6d3768361ec9ac0a"
// };

// // let app;
// if (!firebase.apps.length) {
//   // app = firebase.initializeApp(firebaseConfig);
//   const app = firebase.initializeApp(firebaseConfig);

// } else {
//   app = firebase.app();
// }

// const db = app.firestore();
// const auth = firebase.auth();

// export { db, auth };



// import * as firebase from "firebase";
// import "firebase/firestore";
// import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyABWBMio4dia5Ie3JGPVD30OAPSgudyL2s",
//   authDomain: "signal-cloneyt-build.firebaseapp.com",
//   projectId: "signal-cloneyt-build",
//   storageBucket: "signal-cloneyt-build.appspot.com",
//   messagingSenderId: "1091776107199",
//   appId: "1:1091776107199:web:01b19a6d3768361ec9ac0a"
// };

// let app;
// if(firebase.apps.length === 0)
// {
//     app = firebase.initializeApp(firebaseConfig)
// }
// else
// {
//     app = firebase.app();
// }

// const db = app.firestore();
// const auth = firebase.auth();

// export { db, auth };
