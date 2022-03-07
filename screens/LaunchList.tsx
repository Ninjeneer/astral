import { FlatList, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import Launch from '../components/Launch';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { RootStackParamList } from '../App';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const LaunchList: React.FC = () => {

    const [data, setData] = useState([])
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'launch-list'>>();

    const refreshList = () => {
        fetch('https://fdo.rocketlaunch.live/json/launches/next/5')
            .then((response) => response.json())
            .then((json) => setData(json.result))
    }

    useEffect(refreshList, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={(item) => (
                    <TouchableHighlight onPress={() => navigation.navigate('launch-details', { launch: item.item })} style={{ marginTop: 10 }}>
                        <Launch launch={item.item}></Launch>
                    </TouchableHighlight>
                )}
                style={styles.launchList}>
            </FlatList>

            <TouchableOpacity style={styles.refresh} onPress={refreshList}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>Actualiser</Text>
            </TouchableOpacity>
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
        padding: 10,
        justifyContent: 'center'
    },
    launchList: {
        width: '100%',
        marginTop: 10
    },
    refresh: {
        padding: 10,
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
});

export default LaunchList;