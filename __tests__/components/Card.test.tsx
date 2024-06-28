// __tests__/Card.test.tsx

import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import Card from '../../src/components/Card';

describe('<Card />', () => {
  const mockProps = {
    title: 'Test Title',
    subTitle: 'Test Subtitle',
    imageSource: {uri: 'https://example.com/image.jpg'},
    onPress: jest.fn(),
  };

  it('renders correctly', () => {
    const {getByText, getByTestId} = render(
      <Card
        title={mockProps.title}
        subTitle={mockProps.subTitle}
        imageSource={mockProps.imageSource}
        onPress={mockProps.onPress}
      />,
    );

    const titleElement = getByText(mockProps.title);
    const subTitleElement = getByText(mockProps.subTitle);
    const imageElement = getByTestId('card-image');

    expect(titleElement).toBeTruthy();
    expect(subTitleElement).toBeTruthy();
    expect(imageElement).toBeTruthy();
  });

  it('calls onPress handler when pressed', () => {
    const {getByTestId} = render(
      <Card
        title={mockProps.title}
        subTitle={mockProps.subTitle}
        imageSource={mockProps.imageSource}
        onPress={mockProps.onPress}
      />,
    );

    const cardTouchable = getByTestId('card-touchable');
    cardTouchable.props.onPress();

    expect(mockProps.onPress).toHaveBeenCalled();
  });
});
