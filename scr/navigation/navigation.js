import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BerandaScreen from '../screens/BerandaScreen.js';
import PembatalanScreen from '../screens/PembatalanScreen.js';
import LainnyaScreen from '../screens/LainnyaScreen.js';
import PesananScreen from '../screens/PesananScreen.js';
import DetailPesananScreen from '../screens/DetailPesananScreen.js';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Beranda" component={BerandaScreen} options={{headerShown:false}} />
        <Tab.Screen style={{backgroundColor:'blue'}} name="Daftar Pesanan" component={PesananScreen}/>
        <Tab.Screen name="Pembatalan" component={PembatalanScreen} options={{headerShown:false}}/>
        <Tab.Screen name="Lainnya" component={LainnyaScreen}  options={{headerShown:false}}/>
      </Tab.Navigator> 
    </NavigationContainer>
  );
}
export default Navigation;
