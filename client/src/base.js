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

const app = firebase.initializeApp(config)
const appAnalytics = firebase.analytics()
const fbfs = firebase.firestore()
const fbAuth = app.auth()
// const RehearsalRoomsRef = fbfs.collection('rehearsal-rooms')
// const bandsRef = fbfs.collection('bands')
const MembersDbRef = fbfs.collection('members')

export {
   fbAuth,
   appAnalytics,
   // RehearsalRoomsRef,
   // bandsRef,
   MembersDbRef,
}
