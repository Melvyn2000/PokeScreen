import { Image, StyleSheet } from 'react-native';

export default function ImageViewer({ placeholderImageSource, selectedImage }) {

  const imageSource = selectedImage !== null ? { uri: selectedImage } : placeholderImageSource;

  return (
    <Image source={imageSource} style={styles.Image} />
  );
} 

const styles = StyleSheet.create({
  Image: {
    width: 336,
    height: 332,
    borderRadius: 15,
  }
})