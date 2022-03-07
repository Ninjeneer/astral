import { LaunchData } from "../types/launch.type";
import { Text } from 'react-native';

export type Props = {
    launch: LaunchData;
}

const LaunchDetails: React.FC<Props> = () => {
    return (
        <>
            <Text>Test</Text>
        </>
    )
}

export default LaunchDetails;