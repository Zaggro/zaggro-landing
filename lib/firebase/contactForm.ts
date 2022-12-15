import { firestore } from './firebase'
import { addDoc, collection } from 'firebase/firestore'

interface MessageFirestoreDoc {
  firstName: string
  lastName: string
  email: string
  companyName: string
  message: string
}

export async function sendUserMessage(message: MessageFirestoreDoc) {
  return addDoc(collection(firestore, 'userMessages'), message)
}
