import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import { Styles } from './assets/css/styles';
import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, DetailsScreen } from './Screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack =createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={HomeScreen} 
            options={{title:'CRYSTAL FOUNTAIN',
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
              alignItems:'center',
            },
            headerTintColor: '#fff',
          }} />
            <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
