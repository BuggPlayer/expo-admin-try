import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreatePrdcutsScreen from './screens/Products/CreatePrdcutsScreen';


export default function App() {
  return (
    <View >
     <CreatePrdcutsScreen />
     
    </View>
  );
}

