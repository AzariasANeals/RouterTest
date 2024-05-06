import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, NavigationContainer } from 'react-native';
import { Link, router } from 'expo-router';

function ExercisePage() {
	return (
		<View>
			<Link href= '/HomePage'>Home </Link>
			<Link push href= '/AboutPage'>Details Page</Link>
			<Link replace href= '/UserProfilePage'>Settings</Link>
			
		</View>
	);
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <ExercisePage />
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/*
<Link href={{ pathname: '/user/[id]', params: { id: '456' } }}>
				View User 456
			</Link>
      */