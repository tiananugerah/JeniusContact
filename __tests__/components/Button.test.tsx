// __tests__/Button.test.tsx

import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '../../src/components/Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Button title="Press me" onPress={() => {}} />);
    const buttonElement = getByText('Press me');
    expect(buttonElement).toBeTruthy();
  });

  it('calls onPress callback', () => {
    const onPressMock = jest.fn();
    const {getByText} = render(
      <Button title="Press me" onPress={onPressMock} />,
    );
    const buttonElement = getByText('Press me');
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('matches snapshot', () => {
    const {toJSON} = render(<Button title="Press me" onPress={() => {}} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
