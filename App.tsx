
import React from 'react';
import { Authorization } from './src/Authorization';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App =() => {
  return (
    <View style={{flex: 1}}>
      <Authorization/>  
    </View>
  );
};

export default App;
