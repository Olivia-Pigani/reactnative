import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    Geolocation.requestAuthorization();

    const fetchGps = () => {
      Geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          fetchData(position.coords.latitude, position.coords.longitude); 
        },
        (error) => {
          console.log(error);
        },
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
    };

    const fetchData = async (lat, lon) => {
      const apiKey = 'WkbK1k1qP176e5Kr4NHeo1mRqPIjpez7';
      const url = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apiKey}&q=${lat}%2C${lon}&language=en-us&details=false&toplevel=false`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGps(); 
  }, [latitude,longitude]);

  return (
    <View >
      <Text>Latitude: {latitude}</Text>
      <Text>Longitude: {longitude}</Text>
       <Text>{data?.Country?.LocalizedName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
