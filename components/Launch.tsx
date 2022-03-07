import { StyleSheet, Text, View } from 'react-native';

import { LaunchData } from '../types/launch.type';
import { format } from 'date-fns';
import fr from 'date-fns/locale/fr'

export type Props = {
    launch: LaunchData;
}

const Launch: React.FC<Props> = ({ launch }) => {

    const dateOptions: Intl.DateTimeFormatOptions = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: 'bold' }}>{launch.name} - {launch.vehicle.name}</Text>
            <Text>Entreprise : {launch.provider.name}</Text>
            <Text>Lancement : {format(new Date(Number(launch.sort_date) * 1000), "EEEE dd LLLL yyyy", { locale: fr })}</Text>
            <Text>Vol {launch.suborbital ? 'sub-orbital' : 'orbital'}</Text>
        </View>);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: 'gray',
        padding: 25,
    }
});

export default Launch;