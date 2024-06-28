import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ContactItem from '../../src/components/ContactItem';

describe('ContactItem Component', () => {
  const contact = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    photo: 'https://example.com/photo.jpg',
  };

  it('renders contact item correctly', () => {
    const {getByText, getByTestId} = render(
      <ContactItem contact={contact} onEdit={() => {}} onDelete={() => {}} />,
    );

    // Check if contact details are rendered correctly
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('Age: 30')).toBeTruthy();

    // Check edit and delete buttons
    expect(getByTestId('edit-button')).toBeTruthy();
    expect(getByTestId('delete-button')).toBeTruthy();
  });

  it('calls onEdit callback when edit button is pressed', () => {
    const handleEdit = jest.fn();
    const {getByTestId} = render(
      <ContactItem contact={contact} onEdit={handleEdit} onDelete={() => {}} />,
    );

    fireEvent.press(getByTestId('edit-button'));
    expect(handleEdit).toHaveBeenCalledWith(contact);
  });

  it('calls onDelete callback when delete button is pressed', () => {
    const handleDelete = jest.fn();
    const {getByTestId} = render(
      <ContactItem
        contact={contact}
        onEdit={() => {}}
        onDelete={handleDelete}
      />,
    );

    fireEvent.press(getByTestId('delete-button'));
    expect(handleDelete).toHaveBeenCalledWith('1');
  });
});
