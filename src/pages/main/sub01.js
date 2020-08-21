import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {isDisabled} from 'react-native/Libraries/LogBox/Data/LogBoxData';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
});


const MainSub = ({navigation}) => {

  const [num, setNum] = useState(0);


  const reset = () => {
    if (num > 0) {
      setNum(0);
    }
  };

  const plus = () => {
    setNum(num + 1);
    if (num >= 5) {
      setNum(5);
    }
  };

  const minus = () => {
    setNum(num - 1);
    if (num === 0) {
      setNum(0);
    }
  };

  const btnItem = [
    {
      id: 0,
      title: 'plus',
      btn: () => {
        plus();
      },
    },
    {
      id: 1,
      title: 'minus',
      btn: () => {
        minus();
      },
    },
  ];


  const [number, setNumber] = useState(0);
  const [fixednum, setFixednum] = useState(0);

  return (
    <View style={styles.body}>
      <Text>{num}</Text>
      <View style={{flexDirection: 'row'}}>
        {
          btnItem && btnItem.map(item => {
            return (
              <Button
                key={item.id}
                title={item.title}
                onPress={item.btn}
                disabled={item.title === 'minus' && num === 0}
              />
            );
          })
        }

      </View>

      <Button
        title="리셋"
        onPress={() => reset()}
      />
    </View>
  );
};
export default MainSub;
