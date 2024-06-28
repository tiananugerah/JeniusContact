import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

interface ContactItemProps {
  contact: {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    photo: string;
  };
  onEdit: (contact: any) => void;
  onDelete: (id: string) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact,
  onEdit,
  onDelete,
}) => {
  console.log('Rendering contact item:', contact); // Log contact item

  return (
    <View style={styles.container}>
      <Image source={{uri: contact.photo}} style={styles.photo} />
      <View style={styles.details}>
        <Text style={styles.name}>
          {contact.firstName} {contact.lastName}
        </Text>
        <Text>Age: {contact.age}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => onEdit(contact)}>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(contact.id)}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  photo: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  details: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
  },
  edit: {
    marginRight: 10,
    color: 'blue',
  },
  delete: {
    color: 'red',
  },
});

export default ContactItem;
