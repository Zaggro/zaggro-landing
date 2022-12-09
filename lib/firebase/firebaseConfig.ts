import { FirebaseOptions } from 'firebase/app'

export const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyCHz5kKR1AvthWQ-8sbbFKp0yPuS4P03AA',
  authDomain: 'zaggro.firebaseapp.com',
  projectId: 'zaggro',
  storageBucket: 'zaggro.appspot.com',
  messagingSenderId: '796536712045',
  appId: '1:796536712045:web:ec7ff018af0e1676688864',
  measurementId: 'G-GGFB6K96RP',
} as FirebaseOptions

export const FIREBASE_ENV = process.env.NEXT_PUBLIC_FIREBASE_ENV || 'prod'
