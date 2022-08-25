import {getDatabase, ref, set, update, child, get,
onValue, remove} from "https://www.gstatic.com/firebasejs/9.9.2/firebasedatabase.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
function initializeFirebase() {
  var firebaseConfig = {
    apiKey: "AIzaSyDW93BmUlsdrp3MBc_rBRLPKeZViv9OAk4",
    authDomain: "best-learning-tool-42ca7.firebaseapp.com",
    databaseURL: "https://best-learning-tool-42ca7-default-rtdb.firebaseio.com",
    projectId: "best-learning-tool-42ca7",
    storageBucket: "best-learning-tool-42ca7.appspot.com",
    messagingSenderId: "230725901175",
    appId: "1:230725901175:web:0d5f3cc4af55dc84a01f72",
    measurementId: "G-HGZVJSDBTX"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

initializeFirebase();

let myFlashcard = [
  {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Barn Owl"
  },
  {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
  },
  {
   "question": "Name this species of bird.",
   "image" : "images/hummingbird-2139279__340.webp",
   "answer": "Hummingbird" 
  }
];

const db = getDatabase();
const dbLocation = {};
dbLocation['/deck/flashcards/'] = myFlashcards;
update (ref(db), dbLocation);
