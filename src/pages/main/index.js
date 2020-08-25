import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView, FlatList} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const dd = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title, id }) => (
  <View>
    <Text>{title}</Text>
    <Text>{id}</Text>
  </View>
);


const MainIndex = ({navigation}) => {

    const renderItem = ({ item }) => (
      <Item title={item.title} id={item.id} />
    );


  return (

    <View style={styles.body}>
      <Text>{dd[0].id}</Text>
      <Button
        title="이동하자"
        onPress={() => navigation.navigate('MainSub')}
      />

      <FlatList

        data={dd}
        renderItem={renderItem}

        id={item => item.id}
        title={item => item.title}
      />



    </View>
  );
};
export default MainIndex;
