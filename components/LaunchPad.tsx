import React from 'react';
import { View, Text, StyleSheet, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import { LaunchDetails, LaunchpadWithSelect } from '../screens/Home';

export const LaunchPad: ListRenderItem<LaunchpadWithSelect> = ({ item }) => {
    const { data, select } = item;

    const LaunchItem: ListRenderItem<LaunchDetails> = ({ item }) => {
        return (
            <TouchableOpacity style={styles.listItem} onPress={() => select(item.id)}>
                <Ionicons name="rocket" style={styles.listIcon} size={20} color="#292929" />
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.pad}>
            <View style={styles.nameView}>
                <Ionicons style={styles.nameIcon} color="#292929" name="business-sharp" size={22} />
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.status}>{data.status.toUpperCase()}</Text>
            </View>
            <Text style={styles.fullName}>{data.full_name}</Text>
            <Text style={styles.details}>{data.details.trim()}</Text>
            {data.launches.length ? (
                <View style={styles.topLaunchView}>
                    <MaterialCommunityIcons
                        name="rocket"
                        style={styles.topLaunchesIcon}
                        size={24}
                        color="#292929"
                    />
                    <Text style={styles.topLaunches}>Top Launches</Text>
                </View>
            ) : (
                <Text style={styles.nolaunch}>No Launches Available</Text>
            )}
            <FlatList
                data={data.launches.slice(0, 3)}
                renderItem={LaunchItem}
                keyExtractor={(item: LaunchDetails) => item.id}
                extraData="HO"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    pad: {
        margin: 8,
        padding: 20,
        paddingBottom: 10,
        elevation: 3,
        borderRadius: 8,
        backgroundColor: '#fff',
    },

    nameView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    name: {
        fontWeight: 'bold',
        color: '#292929',
        textAlign: 'left',
        fontSize: 18,
    },
    nameIcon: {
        color: '#454545',
        padding: 5,
        paddingLeft: 0,
    },

    status: {
        paddingHorizontal: 5,
    },
    details: {
        color: '#292929',
        textAlign: 'justify',
        paddingBottom: 5,
    },
    fullName: {
        color: 'grey',
        textAlign: 'left',
        fontSize: 14,
        paddingBottom: 10,
    },

    topLaunchView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        marginBottom: 10,
        borderColor: '#aaa',
    },
    topLaunches: {
        fontSize: 18,
        margin: 10,
        marginLeft: 5,
    },
    topLaunchesIcon: {
        paddingLeft: 0,
        color: '#454545',
    },

    listItem: {
        paddingBottom: 10,
        paddingHorizontal: 0,
        alignItems: 'center',
        flexDirection: 'row',
    },
    listIcon: {
        padding: 5,
        paddingLeft: 0,
        paddingRight: 10,
        color: '#454545',
    },

    nolaunch: {
        color: '#454545',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 10,
    },
});
