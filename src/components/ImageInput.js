import React, { useEffect } from 'react';
import { Image, TouchableHighlight, Alert, StyleSheet } from 'react-native';
import {
  requestMediaLibraryPermissionsAsync,
  launchImageLibraryAsync,
  MediaTypeOptions
} from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { defaultStyles } from '../config';

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await requestMediaLibraryPermissionsAsync();

    if (!granted) {
      alert('You need to enable permission to access the library');
    }
  }

  const handlePress = async () => {
    if (!imageUri) pickImage();
    else showDeleteDialogBox();
  }

  const pickImage = async () => {
    try {
      const options = { mediaTypes: MediaTypeOptions.Images, quality: 0.5 }
      const { uri, cancelled } = await launchImageLibraryAsync(options);

      if (!cancelled) onChangeImage(uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  }

  const showDeleteDialogBox = () => {
    Alert.alert('Delete', 'Are you sure you want to delete this image?', [
      { text: 'No', style: 'cancel' },
      { text: 'Yes, delete', onPress: onChangeImage }
    ]);
  }

  return (
    <TouchableHighlight
      onPress={handlePress}
      style={styles.container}
      underlayColor={defaultStyles.colors.light}
    >
      {imageUri
        ? <Image source={{ uri: imageUri }} resizeMode="contain" style={styles.image} />
        : <MaterialCommunityIcons name="camera" size={40} color={defaultStyles.colors.medium} />}
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;