import Rebase from 're-base'
import firebase from 'firebase'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_SENDER_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_SENDER_MEASUREMENT_ID,
}

const firebaseApp = firebase.initializeApp(config)
const appAnalytics = firebase.analytics()
const db = firebase.database(firebaseApp)
const base = Rebase.createClass(db)

export { base, appAnalytics, firebaseApp }
