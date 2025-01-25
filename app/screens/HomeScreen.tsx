import React from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Logout', style: 'destructive', onPress: () => dispatch({ type: 'LOGOUT' }) },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/blockhouse-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to Blockhouse!</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout} accessible accessibilityLabel="Logout button">
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 250, 
    height: 75, 
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
