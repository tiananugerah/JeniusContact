import {types, flow} from 'mobx-state-tree';
import api from '../api/api';
import ContactModel from '../models/ContactModel';

const ContactStore = types
  .model('ContactStore', {
    contacts: types.array(ContactModel),
  })
  .actions(self => ({
    fetchContacts: flow(function* () {
      try {
        console.log('Fetching contacts...');
        const response = yield api.get('/contact');
        if (response.ok) {
          console.log('Data fetched:', response.data.data); // Log data fetched
          self.contacts = response.data.data; // Access the correct path
        } else {
          console.error('Failed to fetch contacts:', response.problem);
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    }),
    addContact: flow(function* (contact) {
      try {
        const response = yield api.post('/contact', contact);
        if (response.ok) {
          self.contacts.push(response.data.data); // Access the correct path
        } else {
          console.error('Failed to add contact:', response.problem);
        }
      } catch (error) {
        console.error('Error adding contact:', error);
      }
    }),
    updateContact: flow(function* (id, contact) {
      try {
        const response = yield api.put(`/contact/${id}`, contact);
        if (response.ok) {
          const index = self.contacts.findIndex(c => c.id === id);
          if (index !== -1) {
            self.contacts[index] = response.data.data; // Access the correct path
          }
        } else {
          console.error('Failed to update contact:', response.problem);
        }
      } catch (error) {
        console.error('Error updating contact:', error);
      }
    }),
    deleteContact: flow(function* (id) {
      try {
        const response = yield api.delete(`/contact/${id}`);
        console.log('Data delete:', response); // Log data delete
        if (response.ok) {
          const index = self.contacts.findIndex(c => c.id === id);
          if (index !== -1) {
            self.contacts.splice(index, 1);
          }
        } else {
          console.error('Failed to delete contact:', response.problem);
        }
      } catch (error) {
        console.error('Error deleting contact:', error);
      }
    }),
  }));

export default ContactStore.create();
