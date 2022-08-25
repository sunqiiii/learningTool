import {getDatabase, ref, set, update, child, get,
onValue, remove} from "https://www.gstatic.com/firebasejs/9.9.2/firebasedatabase.js";
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import {getAnalytics} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
function initializeFirebase() {
  var firebaseConfig = {
    apiKey: "AIzaSyB7PyoBopqhHlDIeMtIfZc9tP2PyWdPEOQ",
    authDomain: "best-learning-tool-9281c.firebaseapp.com",
    databaseURL: "https://best-learning-tool-9281c-default-rtdb.firebaseio.com",
    projectId: "best-learning-tool-9281c",
    storageBucket: "best-learning-tool-9281c.appspot.com",
    messagingSenderId: "988183622580",
    appId: "1:988183622580:web:9677979a51d67f58d0f8e1",
    measurementId: "G-B6YY6VSY25"
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


firebase.database().ref();  // Specifies the database root
firebase.database().ref("child/path") // Specifies a specific location in the database tree

let myFlashcards = [ {
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

// Make the database point to the location root -> deck -> flashcards
// If the location doesn't exist is will be created
// Create the reference location
let dbLocation = firebase.database().ref('deck/flashcards'); 
 
// myFlashcards will be stored under flashcards in the database
// Anything that was in this location will be overwritten
// Thus, a write operation also does an update
dbLocation.set(myFlashcards);
