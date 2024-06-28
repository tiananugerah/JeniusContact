import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import App from '../App';
import ContactList from '../src/screens/ContactList';
import AddEditContact from '../src/screens/AddEditContact';

jest.mock('react-native-vector-icons/Ionicons', () => {
  const {View} = require('react-native');
  return {
    Ionicons: (props: any) => <View {...props} />,
  };
});

describe('App Component', () => {
  const Tab = createBottomTabNavigator();

  it('renders correctly', () => {
    const {getByText} = render(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Contacts" component={ContactList} />
          <Tab.Screen name="AddEditContact" component={AddEditContact} />
        </Tab.Navigator>
      </NavigationContainer>,
    );

    // Check if Contacts tab is rendered
    expect(getByText('Contacts')).toBeTruthy();

    // Check if AddEditContact tab is rendered
    expect(getByText('AddEditContact')).toBeTruthy();
  });

  it('navigates to Contacts tab correctly', () => {
    const {getByText} = render(
      <NavigationContainer>
        <App />
      </NavigationContainer>,
    );

    fireEvent.press(getByText('Contacts'));

    // Add your assertion for navigation to Contacts tab
    // For example, check if a specific element or screen from Contacts tab is rendered
    expect(getByText('List of Contacts')).toBeTruthy();
  });

  it('navigates to AddEditContact tab correctly', () => {
    const {getByText} = render(
      <NavigationContainer>
        <App />
      </NavigationContainer>,
    );

    fireEvent.press(getByText('AddEditContact'));

    // Add your assertion for navigation to AddEditContact tab
    // For example, check if a specific element or screen from AddEditContact tab is rendered
    expect(getByText('Add or Edit Contact')).toBeTruthy();
  });
});
