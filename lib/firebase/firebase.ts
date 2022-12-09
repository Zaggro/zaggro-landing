import { FIREBASE_CONFIG } from './firebaseConfig'
import { getAnalytics } from 'firebase/analytics'
import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

function createFirebaseApp() {
  if (getApps().length <= 0) {
    const app = initializeApp(FIREBASE_CONFIG)
    return app
  }
}

const firebaseApp = createFirebaseApp()
export const firestore = getFirestore(firebaseApp as FirebaseApp)
export const analytics =
  typeof window !== 'undefined' ? getAnalytics(firebaseApp) : null
