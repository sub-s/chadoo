import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const InteriorIndex = (props) => {
  return (
    <View style={styles.body}>
      <Text>인테리어</Text>
    </View>
  );
};

export default InteriorIndex;
