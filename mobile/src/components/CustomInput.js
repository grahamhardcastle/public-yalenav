import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';

const CustomInput = ( { value, setValue, placeholder, secureTextEntry }) => {
    const [ isFocused, setIsFocused ] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <View style={styles.container}>
            <TextInput 
                value = { value } 
                onChangeText = { setValue } 
                label={ placeholder } 
                styles= {[styles.input, `styles.label_${isFocused}`]}
                secureTextEntry = { secureTextEntry } 
                mode = 'outlined'
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#F9FBFC',
        width:'100%',
        padding: 5,
        borderColor:'#F9FBFC',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        alignContent:'center',
    },
    input:{},
    label_true:{
        wdith: 20,
    },
    label_false:{
        placeholderTextColor:'red',
    }
});

export default CustomInput;