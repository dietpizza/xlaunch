import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
    title: string;
};

export const Header: React.FC<Props> = ({ title }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 18,
        backgroundColor: '#292929',
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
