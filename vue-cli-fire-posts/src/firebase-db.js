import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyAS1E3LNYKQnoEJlwzRDJxMcQDfhJsYzlI',
    authDomain: 'post-app-cederdorff.firebaseapp.com',
    databaseURL: 'https://post-app-cederdorff.firebaseio.com',
    projectId: 'post-app-cederdorff',
    storageBucket: 'post-app-cederdorff.appspot.com',
    messagingSenderId: '710761082156',
    appId: '1:710761082156:web:e507682fb1e9e540099089'
  })
  .firestore()

export const postRef = db.collection('posts')
