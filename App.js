import * as React from 'react';
import { Image } from 'expo-image';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LogoTitle() {
  return (
    <Image style={{ width: 70, height: 35}}
    source={require('../example/react-native-logo.png')}
    />
  )
}

function HomeScreen ({ navigation }) {
  return (
  <SafeAreaProvider>
  <View style={styles.container}>
  <Text style={styles.text} onPress={() => navigation.navigate('Details')}>Go to Details !</Text>
  </View>
  </SafeAreaProvider>
  );
}

function DetailsScreen ({ navigation }) {
  return (
  <SafeAreaProvider>
  <View style={styles.container}>
  <Text style={styles.text} onPress={() => navigation.navigate('Home')}>Return to Home !</Text>
  <Button title="Go to Details... again" onPress={() => navigation.push('Details')}/>
  <Button title="Go back!" onPress={() => navigation.goBack()}/>
  </View>
  </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{headerStyle: {backgroundColor: 'black'}, 
        headerTitleStyle: {fontWeight: 'bold', color: 'white'},
        headerRight: () => ( <Button
          onPress={() => alert('This is a button!')}
          title='Info' color='#fff'/> ), }} />
        <Stack.Screen name="Details" component={DetailsScreen}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'black'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
