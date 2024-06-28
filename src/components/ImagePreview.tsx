import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

interface ImagePreviewProps {
  source: {uri: string};
}

const ImagePreview: React.FC<ImagePreviewProps> = ({source}) => {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
  },
});

export default ImagePreview;
