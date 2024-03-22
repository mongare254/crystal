import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, TextInput, View, ScrollView, Button} from 'react-native';
import { Styles } from './assets/css/styles';
import Ionicons from '@expo/vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';


//first screen --default
function HomeScreen({navigation, route}){

    React.useEffect(() => {
        if (route.params?.post) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server
        }
      }, [route.params?.post]);
    return (
        <View>
        <View style={Styles.topbar}>
            <Text style={Styles.title}>CRYSTAL FOUNTAIN SDA CHURCH</Text>
        </View>
        <ScrollView >
          
      <View style={Styles.container}>  
          <View style={Styles.wrapper}>   
          <View style={Styles.card}>
              <Ionicons name="wallet-outline" size={53} color="green" />
              <Text>Members</Text>
          </View>
          <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
          <View style={Styles.card}>
              <Ionicons name="wallet-outline" size={53} color="green" />
              <Text>Tithe & Offering</Text>
          </View>   
          </View>
          <View style={Styles.wrapper}>
          <View style={Styles.card}>
              <Ionicons name="heart-circle-outline" size={53} color="green" />
              <Text>Welfare</Text>
          </View>
          <View style={Styles.card}>
              <Ionicons name="people-outline" size={53} color="green" />
              <Text>Prayer Cells</Text>
          </View>
          </View>
          <View style={Styles.wrapper}> 
          <View style={Styles.card}>
              <Ionicons name="receipt-outline" size={53} color="green" />
              <Text>Departments</Text>
          </View>
          <View style={Styles.card}>
              <Ionicons name="mail-unread-outline" size={53} color="green" />
              <Text>Feedback</Text>
          </View>
          </View>
          <View>
          <Button title="Press me" onPress={() => navigation.navigate('Details', {userName:'William',age:23})} />
          </View>
      </View>
      </ScrollView> 
      </View> 
    );
}

function DetailsScreen({ navigation, route }) {
    const [postText, setPostText] = React.useState('');
  
    return (
      <>
        <TextInput
          multiline
          placeholder="What's on your mind?"
          style={{ height: 200, padding: 10, backgroundColor: 'white' }}
          value={postText}
          onChangeText={setPostText}
        />
        <Button
          title="Done"
          onPress={() => {
            // Pass and merge params back to home screen
            navigation.navigate({
              name: 'Home',
              params: { post: postText },
              merge: true,
            });
          }}
        />
      </>
    );
  }

export {HomeScreen, DetailsScreen}