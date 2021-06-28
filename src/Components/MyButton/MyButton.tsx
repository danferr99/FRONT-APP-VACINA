import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';
import cores from '../../Styles/cores';

interface ButtonProps extends TouchableOpacityProps {
    title: string
}

export function MyButton({ title, ...rest }: ButtonProps) {

    return (
        <>
            <TouchableOpacity style={styles.MyButtonStyle}
                activeOpacity={0.7}
                {...rest}
            >
                <Text style={styles.MyTextButtonStyle}> {title} </Text>
            </TouchableOpacity>
        </>

    );
}


const styles = StyleSheet.create({
    MyButtonStyle: {
        backgroundColor: cores.blue,
        borderRadius: 8,
        height: 50,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16
    },
    MyTextButtonStyle: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
});