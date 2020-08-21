import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const MyShopping = (props) => {
  return (
    <View style={styles.body}>
      <Text>마이쇼핑 페이지</Text>
    </View>
  );
};

export default MyShopping;
