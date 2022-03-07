import { FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import Header from '../components/Header';
import Launch from '../components/Launch';
import React from 'react';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const LaunchList: React.FC = () => {

    const [data, setData] = useState([])
    const navigation = useNavigation();

    useEffect(() => {
        fetch('https://fdo.rocketlaunch.live/json/launches/next/5')
            .then((response) => response.json())
            .then((json) => setData(json.result))
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={(item) => (
                    <TouchableHighlight onPress={() => navigation.navigate('launch-details')} style={{ marginTop: 10 }}>
                        <Launch launch={item.item}></Launch>
                    </TouchableHighlight>
                )}
                style={styles.launchList}>
            </FlatList>

            <View>
                <Text>Lol</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#000',
        padding: '10px',
        justifyContent: 'center'
    },
    launchList: {
        width: '100%',
        marginTop: 10
    }
});

export default LaunchList;