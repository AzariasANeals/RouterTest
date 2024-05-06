import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function AboutPage() {
	return (
		<View>
			<Text>THIS IS THE ABOUT PAGE</Text>
			<Link push href= '/HomePage'> Go to Home Page </Link>
			<Link replace href= '/UserProfilePage'> Go to UserProfile Page </Link>
		</View>
	);
}