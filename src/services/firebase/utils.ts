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
