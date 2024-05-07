import { View, Text } from 'react-native';
import { Link, useParams, useLocalSearchParams } from 'expo-router';

// 			<Link href= '/.[user].js'> Go to User Page </Link>

export default function UserProfilePage() {
		const local  = useLocalSearchParams();	
		console.log("Local:", local.user)
		return (
		<View>
			<Text>THIS IS THE USER PROFILE PAGE</Text>
			<Link href= '/HomePage'> Go to Home Page </Link>
			<Link href= '/AboutPage'> Go to About Page </Link>
			<Link href ='/index.js'> [User.js] Page</Link>
			<Text>User ID: {local.user}</Text>
		</View>
	);
}
