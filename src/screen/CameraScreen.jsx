import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import ImageViewer from '../components/CameraScreen/ImageViewer';
import Button from '../components/CameraScreen/Button';
import * as ImagePicker from 'expo-image-picker';

const PlaceholderImage = require('./../../assets/pikachu.png');

export default function App() {
    const [selectedImage, setSelectedImage] = useState(null);

    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {
            alert('You did not select any image.');
        }
    };

    return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} />
        </View>
        <View style={styles.footerContainer}>
            <Button label="Choose your picture" theme="primary" onPress={pickImageAsync} />
            <Button label="Use this photo" />
        </View>
        <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 100,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});