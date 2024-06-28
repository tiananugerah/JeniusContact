// App.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactList from './src/screens/ContactList';
import AddEditContact from './src/screens/AddEditContact';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Contacts') {
              iconName = focused ? 'ios-contacts' : 'ios-contacts-outline';
            } else if (route.name === 'AddEditContact') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#007aff',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: '#f0f0f0',
          },
          labelStyle: {
            fontSize: 12,
          },
        }}>
        <Tab.Screen name="Contacts" component={ContactList} />
        <Tab.Screen name="AddEditContact" component={AddEditContact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
