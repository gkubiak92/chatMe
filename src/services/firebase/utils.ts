import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import firebase from 'firebase';

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
}

const defaultLocale = 'en-US';

const defaultTimeOptions: Intl.DateTimeFormatOptions = {
  hour: '2-digits',
};

const defaultDateOptions: Intl.DateTimeFormatOptions = {
  month: 'short',
  day: 'numeric',
};

export const convertFirebaseTime = (
  timestamp: firebase.firestore.Timestamp,
  locale = defaultLocale,
  timeOptions = defaultTimeOptions,
  dateOptions = defaultDateOptions,
) =>
  timestamp.toDate().toLocaleString(locale, { ...timeOptions, ...dateOptions });

export const getFirebaseTime = (t: firebase.firestore.Timestamp) =>
  t.toDate().toLocaleTimeString(defaultLocale, defaultTimeOptions);

export const getFirebaseDate = (t: firebase.firestore.Timestamp) =>
  t.toDate().toLocaleDateString(defaultLocale, defaultDateOptions);

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    return await GoogleSignin.signIn();
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      console.log('signin cancelled');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.log('signin in progress');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log('play services not available');
    } else {
      // some other error happened
      console.log('Something went wrong');
    }
    throw new Error(error);
  }
};

export const signOutFromGoogle = async () => {
  try {
    await GoogleSignin.signOut();
  } catch (error) {
    throw new Error(error);
  }
};
