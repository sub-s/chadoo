import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';


const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const MainTabIndex = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text>인덱스</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
};

export default MainTabIndex;
