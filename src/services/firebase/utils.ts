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
