import { View, Text } from 'react-native';
import { Link, useParams, useState } from 'expo-router';


export default function UserProfilePage() {

		const userId  = [{ID: 'user123', key:'1'}];
	
		return (
		<View>
			<Text key = {userId.key}>THIS IS THE USER PROFILE PAGE</Text>
			<Link href= '/HomePage'> Go to Home Page </Link>
			<Link href= '/AboutPage'> Go to About Page </Link>
			<Text>User ID: {userId.userID}</Text>
		</View>
	);
}
