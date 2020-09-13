import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import firestore from '@react-native-firebase/firestore'

const ChatScreen = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    if (!dataLoaded) {
      firestore().collection('rooms')
        .get()
        .then(data => {
          const arr = data.docs.map(item => item.data());
          setData(arr);
          setDataLoaded(true)
        })
        .catch(e => console.log(e))
    }
  }, [])

  return (
    <View>
      <Text>Here will be chat</Text>
      {data.map((room) => <Text>{room.name}</Text>)}
    </View>
  )
};

export default ChatScreen;
