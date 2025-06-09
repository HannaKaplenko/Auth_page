import React from 'react';
import { useState} from 'react';
import { styles } from './styles';
import { Text, TouchableOpacity, View, TextInput, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const AuthorizationView = () => {
  const [form, setForm] = useState({
    login: 'michaelw',
    password: 'michaelwpass',
  });
  const navigation = useNavigation<any>();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [showPassword, setPassword] = useState(false);


  const OnChangeLogin = (text: string) => {
    setForm({ ...form, login: text });
  };

  const OnChangePassword = (text: string) => {
    setForm({ ...form, password: text });
  };

  const onAuthorize = async () => {
    try {
      console.log('Form:', form);
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          username: "michaelw",
          password: "michaelwpass",
        }),
      });
      const data = await response.json();

      if (data.accessToken) {
        navigation.navigate("ProductsView");
      }
    } catch (error) {
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}> This is our main page </Text>
      <View style={styles.inputWrappoer}>
        <TextInput
          value={form.login}
          onChangeText={OnChangeLogin}
          placeholder="Your login"
          style={styles.input}></TextInput>
      </View>
      <View style={styles.inputWrappoer}>
        <TextInput
          value={form.password}
          onChangeText={OnChangePassword}
          placeholder="Your password"
          style={styles.input}></TextInput>
      </View>
      <TouchableOpacity style={styles.button} onPress={onAuthorize}>
        <Text style={styles.textColor}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};
