import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { convertSnapshotToArray } from '../../services/firebase/utils';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
`;

const StyledText = styled.Text`
  padding: 10px;
  font-size: 18px;
  height: 44px;
`;

const ChatScreen = () => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setData] = useState([] as any[]);

  useEffect(() => {
    if (!dataLoaded) {
      firestore()
        .collection('rooms')
        .get()
        .then((res) => {
          setData(convertSnapshotToArray(res));
          setDataLoaded(true);
        })
        .catch((e) => console.log(e));
    }
  }, [dataLoaded]);

  return (
    <StyledView>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <StyledText key={item.id}>{item.name}</StyledText>
        )}
      />
    </StyledView>
  );
};

export default ChatScreen;
