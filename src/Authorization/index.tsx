import React from "react";
import {useState, useEffect} from "react";
import {styles} from "./styles";
import {
    Text,
    TouchableOpacity,
    View,
    SafeAreaView, 
    TextInput,
} from "react-native";

export const Authorization = () => {
    const [form, setForm] = useState ({
        login: "",
        password: "",
    });
    const OnChangeLogin = (text: string) => {
        setForm (prev => ({ ...form, login: text}));
    };
     
    const OnChangePassword = (text: string) => {
        setForm (prev => ({...form, password: text}));
    };

    const onAuthorize = async () => {};


    return (
    <View style={styles.container}> 
    
        <Text style={styles.message}> This is our main page </Text>
        <TextInput style={styles.inputWrappoer}>Your login</TextInput>
        <TextInput style={styles.inputWrappoer}>Your password</TextInput>
        <TouchableOpacity style={styles.button}> Enter </TouchableOpacity>
    </View> )};