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
