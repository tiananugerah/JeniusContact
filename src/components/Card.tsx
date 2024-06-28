import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

interface CardProps {
  title: string;
  subTitle: string;
  imageSource: {uri: string};
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({title, subTitle, imageSource, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={imageSource} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
  },
});

export default Card;
