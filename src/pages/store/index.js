import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const StoreIndex = (props) => {
  return (
    <View style={styles.body}>
      <Text>스토어</Text>
    </View>
  );
};

export default StoreIndex;
