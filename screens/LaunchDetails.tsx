import { Image, Text, View } from 'react-native';
import { format, formatInTimeZone, zonedTimeToUtc } from "date-fns-tz";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { StyleSheet } from 'react-native';
import fr from 'date-fns/locale/fr';

type Props = NativeStackScreenProps<RootStackParamList, 'launch-details'>;

const LaunchDetails: React.FC<Props> = ({ route }) => {
    const launch = route.params.launch;

    let launchDate = format(new Date(Number(launch.sort_date) * 1000), 'EEEE dd LLLL yyyy', { locale: fr });
    launchDate = launchDate.charAt(0).toUpperCase() + launchDate.substring(1);

    let frenchDate = new Date(launch.win_open);
    frenchDate.setHours(frenchDate.getHours() + 1);

    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 20 }}>
                <Image source={require('../images/launch_icon.png')} style={{ width: 150, height: 150, resizeMode: 'contain' }} />
                <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{launch.name}</Text>
                    <Text style={{ fontSize: 20 }}>Entreprise : {launch.provider.name}</Text>
                </View>
            </View>

            <Text style={styles.sectionTitle}>Description du lancement : </Text>
            <Text style={styles.sectionText}>{launch.launch_description ? launch.launch_description : 'Aucune description'}</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Description de la mission : </Text>
                <Text style={styles.sectionText}>{launch.mission_description ? launch.mission_description : 'Aucune description'}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Position du lancement :</Text>
                <Text style={styles.sectionText}>Pas de tir : {launch.pad.name}</Text>
                <Text style={styles.sectionText}>{ launch.pad.location.name }</Text>
                <Text style={styles.sectionText}>{ launch.pad.location.statename } - { launch.pad.location.country }</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Date de lancement :</Text>
                <Text style={styles.sectionText}>{launchDate}</Text>
                <Text style={styles.sectionText}>Heure UTC : {format(new Date(launch.win_open), "HH'h' mm'm' ss's'")}</Text>
                <Text style={styles.sectionText}>Heure en France : {format(frenchDate, "HH'h' mm'm' ss's'")}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        justifyContent: 'flex-start',
    },
    section: {
        marginTop: 10,
    },
    sectionText: {
      fontSize: 17,
      marginLeft: 10  
    },
    sectionTitle: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default LaunchDetails;