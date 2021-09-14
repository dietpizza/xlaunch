import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const Loader: React.FC = () => {
    return (
        <View style={styles.view}>
            <ActivityIndicator style={styles.indicator} size={64} color="#292929" />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
    },
    indicator: {
        paddingBottom: 20,
    },
});
