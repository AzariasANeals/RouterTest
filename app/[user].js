import { Text, View } from 'react-native';
import { useLocalSearchParams, useGlobalSearchParams, Link } from 'expo-router';

const friends = ['charlie', 'james']

export default function Route() {
  const glob = useGlobalSearchParams();
  const local = useLocalSearchParams();

  console.log("Local:", local.user, "Global:", glob.user);

  return (
    <View>
      <Text>User: {local.user}</Text>
      {friends.map(friend => (
        <Link key={friend} href={`/${friend}`}>
          Visit {friend}
        </Link>
      ))}
    </View>
  );
}