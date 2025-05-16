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
    const onAuthorize = async () => {};

    return (
    <View style={styles.container}> 
        <Text style={styles.message}> This is our main page </Text>
        <TouchableOpacity style={styles.button}> Enter </TouchableOpacity>
    </View> )};