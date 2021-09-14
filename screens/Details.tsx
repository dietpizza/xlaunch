import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { MainNavigationProp, MainRoutesProp } from '../routing/types';
import { Routes } from '../routing/routes';

type DetailsScreenProps = {
    route: MainRoutesProp<Routes.Details>;
};

export const Details = ({ route }: DetailsScreenProps) => {
    const { name, fairings, details, date_unix } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.nameView}>
                    <Ionicons name="rocket" style={styles.nameIcon} size={20} color="#292929" />
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.reused}>{fairings.reused ? 'REUSED' : 'NOT REUSED'}</Text>
                </View>
                <Text style={styles.date}>
                    Launch Date: {new Date(date_unix * 1000).toLocaleString()}
                </Text>
                <Text style={styles.details}>Details: {details ? details : 'Empty'}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    card: {
        backgroundColor: '#fff',
        elevation: 3,
        padding: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    nameView: {
        margin: 5,
        marginHorizontal: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    nameIcon: {
        padding: 5,
        paddingLeft: 0,
        paddingRight: 10,
        color: '#454545',
    },
    details: {
        color: 'gray',
        paddingVertical: 5,
    },
    date: {
        color: '#252525',
        paddingVertical: 5,
    },
    reused: {
        paddingHorizontal: 5,
        fontSize: 16,
    },
});
