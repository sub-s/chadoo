import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const MainIndex = ({navigation}) => {
  return (
    <View style={styles.body}>
      <Text>메인</Text>
      <Button
        title="이동하자"
        onPress={() => navigation.navigate('MainSub')}
      />
    </View>
  );
};
export default MainIndex;
