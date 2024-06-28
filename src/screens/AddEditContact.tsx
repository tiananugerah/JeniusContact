import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {observer} from 'mobx-react-lite';
import {Formik} from 'formik';
import * as yup from 'yup';
import ContactStore from '../stores/ContactStore';
import Button from '../components/Button';
import ImagePreview from '../components/ImagePreview';
import Input from '../components/Input';

interface FormValues {
  firstName: string;
  lastName: string;
  age: number;
  photo: string;
}
const contactValidationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  age: yup
    .number()
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer'),
  photo: yup
    .string()
    .url('Photo must be a valid URL')
    .required('Photo is required'),
});

const AddEditContact = observer(({route, navigation}: any) => {
  const contact = route.params?.contact;

  const initialValues = {
    firstName: contact ? contact.firstName : '',
    lastName: contact ? contact.lastName : '',
    age: contact ? contact.age.toString() : '',
    photo: contact ? contact.photo : '',
  };

  const handleSubmit = (values: FormValues) => {
    if (contact) {
      ContactStore.updateContact(contact.id, values);
    } else {
      ContactStore.addContact(values);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={contactValidationSchema}
        onSubmit={handleSubmit}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <Text style={styles.label}>First Name</Text>
            <Input
              placeholder="Enter first name"
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
            />
            {touched.firstName && errors.firstName && (
              <Text style={styles.error}>{errors.firstName as string}</Text>
            )}

            <Text style={styles.label}>Last Name</Text>
            <Input
              placeholder="Enter last name"
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
            />
            {touched.lastName && errors.lastName && (
              <Text style={styles.error}>{errors.lastName as string}</Text>
            )}

            <Text style={styles.label}>Age</Text>
            <Input
              placeholder="Enter age"
              value={values.age}
              onChangeText={handleChange('age')}
              onBlur={handleBlur('age')}
              keyboardType="numeric"
            />
            {touched.age && errors.age && (
              <Text style={styles.error}>{errors.age as string}</Text>
            )}

            <Text style={styles.label}>Photo URL</Text>
            <Input
              placeholder="Enter photo URL"
              value={values.photo}
              onChangeText={handleChange('photo')}
              onBlur={handleBlur('photo')}
            />
            {touched.photo && errors.photo && (
              <Text style={styles.error}>{errors.photo as string}</Text>
            )}

            {values.photo && <ImagePreview source={{uri: values.photo}} />}

            <Button
              title={contact ? 'Update Contact' : 'Add Contact'}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    marginBottom: 5,
    color: '#333',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    fontSize: 12,
  },
});

export default AddEditContact;
