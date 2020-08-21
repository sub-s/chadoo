import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HeaderBackButton} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';


import MainIndex from '../pages/main/index';
import MainSub from '../pages/main/sub01';
import InteriorIndex from '../pages/interior/index';
import StoreIndex from '../pages/store/index';
import Profile from '../pages/mypage/profile';
import MyShopping from '../pages/mypage/myshopping';
import MyPageIndex from '../pages/mypage/index';
import Index from '../pages/index';


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MyPageIndex" component={MyPageIndex}/>
      <Tab.Screen name="Profile" component={Profile}/>
      <Tab.Screen name="MyShopping" component={MyShopping}/>

    </Tab.Navigator>
  );
}


const SubStackNav = createStackNavigator();
const SubMenu01 = () => {
  return (
    <SubStackNav.Navigator>
      <SubStackNav.Screen name="MainSub" component={MainSub}  options={{headerShown: false}}/>
    </SubStackNav.Navigator>
  );
};

const MainTabNav = createBottomTabNavigator();
const MainTab = () => {
  return (
    <MainTabNav.Navigator mode={'modal'}>
      <MainTabNav.Screen name="Main" component={MainIndex}/>
      <MainTabNav.Screen name="Store" component={StoreIndex}/>
      <MainTabNav.Screen name="Interior" component={InteriorIndex}/>
      <MainTabNav.Screen name="MyPage" component={MyTabs}/>
    </MainTabNav.Navigator>
  );
};

const CoverStackNav = createStackNavigator();
const AppContainer = () => {
  return (
    <NavigationContainer>
      <CoverStackNav.Navigator>
        <CoverStackNav.Screen name="Index" component={Index} options={{headerShown: false}}/>
        <CoverStackNav.Screen name="Main" component={MainTab} options={{headerShown: false}}/>

        <SubStackNav.Screen name="MainSub" component={SubMenu01} />


      </CoverStackNav.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
