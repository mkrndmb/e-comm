import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDgsK9PeE1uL47WTqW__zg5NwbVBL0_OTA",
    authDomain: "e-comm-f0cbe.firebaseapp.com",
    projectId: "e-comm-f0cbe",
    storageBucket: "e-comm-f0cbe.appspot.com",
    messagingSenderId: "486832372143",
    appId: "1:486832372143:web:8775e8a2b155924a9d575a",
    measurementId: "G-8596MM9EYX"
  };

export const createUserProfileDoc = async (userAuth , additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snap = await userRef.get()
  // console.log(snap,userAuth.uid)
  if(!snap.exists) {
    const {displayName , email} = userAuth
    const createdDate = new Date()

    try{
      await userRef.set({
        displayName,email,createdDate,...additionalData
      })
    }
    catch(err){
      console.log(err.message)
    }
  }
  
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

