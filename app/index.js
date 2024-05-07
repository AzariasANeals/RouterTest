import { StyleSheet, Text, View } from "react-native";
import { Link, router, Redirect } from 'expo-router';

function ExercisePage() {
	return (
		<View>
			<Link href= './HomePage'>Home Page </Link>
			<Link push href= './AboutPage'>About Page</Link>
			<Link replace href= './UserProfilePage'>User Profile Page</Link>
			
		</View>
	);
}

export function Route(){
  return <Redirect href="/evanbacon" />;
}

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <ExercisePage />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
