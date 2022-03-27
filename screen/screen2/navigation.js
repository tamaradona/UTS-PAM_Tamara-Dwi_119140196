import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BerandaScreen from '../screens/BerandaScreen';
import PembatalanScreen from '../screens/PembatalanScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LainnyaScreen from '../screens/LainnyaScreen';
import PesananScreen from '../screens/PesananScreen';
import DetailPesananScreen from '../screens/DetailPesananScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Beranda" component={Tab1} options={{headerShown:false}} />
        <Stack.Screen name="DetailPesanan" component={DetailPesananScreen} />
        <Stack.Screen name="Pembatalan" component={PembatalanScreen} />
        <Stack.Screen name="Pesanan" component={Tab1} options={{headerShown:false}} />
      </Stack.Navigator> 
    
    </NavigationContainer>
  );
}
export default Navigation;

export function Tab1(){
  return(
    <Tab.Navigator>
        <Tab.Screen name="Beranda" component={BerandaScreen} />
        <Tab.Screen name="Pesanan" component={PesananScreen} />
        <Tab.Screen name="Lainnya" component={LainnyaScreen} />
    </Tab.Navigator>
  );
}