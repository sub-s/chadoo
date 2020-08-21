import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Dimensions} from 'react-native';
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
  const {width} = Dimensions.get('window');
  console.log("width:::", width);
  return (
    <View style={styles.body}>
      <View style={{flexDirection: 'row'}}>
        {
          Array.from({length: width / 15}, (_, i) => (
            <View
              style={{
                width: 18,
                height: 20,
                backgroundColor: i % 2 === 0 ? '#e75052' : '#cbdcfe',
                borderBottomLeftRadius: 8,
                borderBottomEndRadius: 8,
              }}
            />
          ))
        }
      </View>
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
