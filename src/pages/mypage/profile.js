import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Profile = (props) => {
  return (
    <View style={styles.body}>
      <Text>프로필 페이지</Text>
    </View>
  );
};

export default Profile;
