import { Config } from 'react-native-config'
import firebase from '@react-native-firebase/app'

const firebaseConfig = {
    apiKey: Config.FIREBASE_API_KEY,
    authDomain: Config.FIREBASE_AUTH_DOMAIN,
    databaseURL: Config.FIREBASE_DATABASE_URL,
    projectId: Config.FIREBASE_PROJECT_ID,
    storageBucket: Config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID,
    appId: Config.FIREBASE_APP_ID,
};

// firebase.initializeApp(firebaseConfig);


/*
 * Method which convert collection snapshot fetched from firestore
 * to array which can be put into redux state
 */
export function convertSnapshotToArray(collection: any) {
    const arr = collection.docs.map((item: any) => {
        return {
            ...item.data(),
            id: item.id,
        };
    });
    return arr;
};


