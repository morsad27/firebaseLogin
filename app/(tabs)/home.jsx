import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH } from '../../firebase.client';
import { signOut } from 'firebase/auth';
import { router } from 'expo-router';

const HomeScreen = () => {
  const user = FIREBASE_AUTH.currentUser;

  const logout = async () => {
    try {
      await signOut(FIREBASE_AUTH);
      router.replace('/');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome, {user?.displayName || user?.email}!</Text>

      <TouchableOpacity onPress={logout} style={{ marginTop: 20, padding: 10, backgroundColor: '#f00', borderRadius: 8 }}>
        <Text style={{ color: '#fff' }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
