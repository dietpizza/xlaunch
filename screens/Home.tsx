import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, Alert, View, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { MainNavigationProp } from '../routing/types';
import { Routes } from '../routing/routes';
import { LaunchPad } from '../components/LaunchPad';
import { Loader } from '../components/Loader';
import { launchQuery } from '../util/QueryScheme';

export type LaunchDetails = {
    fairings: {
        reused: boolean;
    };
    details: string;
    name: string;
    date_unix: number;
    id: string;
};

export type LaunchpadDetails = {
    id: string;
    name: string;
    full_name: string;
    status: string;
    details: string;
    launches: Array<LaunchDetails>;
};

export type LaunchpadWithSelect = {
    data: LaunchpadDetails;
    select: Function;
};

type HomeScreenProps = {
    navigation: MainNavigationProp<Routes.Home>;
};

export const Home = ({ navigation }: HomeScreenProps) => {
    const [data, setData] = useState<Array<LaunchpadDetails>>([]);
    const [fetchError, setFetchError] = useState<boolean>(false);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launchpads/query', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: launchQuery,
        })
            .then((response: Response) => response.json())
            .then((response) => {
                setData(response.docs);
            })
            .catch(() => {
                setFetchError(true);
                Alert.alert('Error!', 'Error contacting SpaceX');
            });
    }, []);

    const select = (index: number): Function => {
        return (id: string) => {
            const launchIndex: number = data[index].launches.findIndex(
                (val: LaunchDetails) => val.id === id
            );
            navigation.push(Routes.Details, data[index].launches[launchIndex]);
        };
    };

    const getData = (data: Array<LaunchpadDetails>): Array<LaunchpadWithSelect> => {
        return data.map((el: LaunchpadDetails, index: number) => {
            return { data: el, select: select(index) };
        });
    };
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#292929" />
            {fetchError ? (
                <MaterialCommunityIcons style={styles.error} name="doctor" />
            ) : data.length !== 0 ? (
                <FlatList
                    data={getData(data)}
                    renderItem={LaunchPad}
                    keyExtractor={(item: LaunchpadWithSelect) => item.data.id}
                />
            ) : (
                <Loader />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e1e1',
        padding: 5,
    },
    textElement: {
        fontSize: 56,
        color: 'grey',
    },
    error: {
        paddingVertical: 30,
        fontSize: 72,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});
