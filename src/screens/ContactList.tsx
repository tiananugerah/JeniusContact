import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import ContactStore from '../stores/ContactStore';
import Card from '../components/Card';

const ContactList = observer(({navigation}: any) => {
  const [isLoading, setIsLoading] = useState(true); // State untuk menangani status loading
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchContacts = async () => {
    try {
      await ContactStore.fetchContacts();
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const onRefresh = async () => {
    setIsRefreshing(true);
    await fetchContacts();
    setIsRefreshing(false);
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#007aff" />
      </View>
    );
  }

  const handleDeleteContact = (id: string) => {
    Alert.alert(
      'Delete Contact',
      'Are you sure you want to delete this contact?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => ContactStore.deleteContact(id),
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ContactStore.contacts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AddEditContact', {contact: item})
            }>
            <Card
              title={`${item.firstName} ${item.lastName}`}
              subTitle={`Age: ${item.age}`}
              imageSource={{uri: item.photo}}
              onPress={() => handleDeleteContact(item.id)}
            />
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default ContactList;
