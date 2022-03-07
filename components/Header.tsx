import { StyleSheet, Text, View } from "react-native"

import React from "react"

const Header: React.FC = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>A.S.T.R.A.L</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#000',
        padding: 10,
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        letterSpacing: 6
    }
});

export default Header;