import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {convertSnapshotToArray} from '../../services/firebase/firebase';

const ChatScreen = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    if (!dataLoaded) {
      firestore()
        .collection('rooms')
        .get()
        .then((data) => {
          setData(convertSnapshotToArray(data));
          setDataLoaded(true);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <View>
      <Text>Here will be chat</Text>
      {data.map((room) => (
        <Text key={room.id}>{room.name}</Text>
      ))}
    </View>
  );
};

export default ChatScreen;
