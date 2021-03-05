import { useState, useEffect } from 'react';
import { requestPermissionsAsync, getLastKnownPositionAsync } from 'expo-location';

const useLocation = () => {
  const [location, setLocation] = useState();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { granted } = await requestPermissionsAsync();

      if (!granted) return null;
  
      const result = await getLastKnownPositionAsync();
      const { coords: { latitude, longitude } } = result;
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log('er',error);
    }
  }

  return location;
}

export default useLocation;

