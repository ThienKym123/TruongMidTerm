import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons'

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.time}>9:41</Text>
        {/* Add other status bar icons here */}
      </View>
      <Image
        source={require('./assets/SignIn.png')}
        style={styles.image}
      />
      <Text style={styles.title}>
        Get your groceries{'\n'}with nectar
      </Text>
      <View style={styles.phoneContainer}>
        <Image
          source={require('./assets/icon1.jpg')}
          style={styles.flag}
        />
        <Text style={styles.countryCode}>+880</Text>
      </View>
      <Text style={styles.orText}>Or connect with social media</Text>
      <TouchableOpacity style={styles.googleButton}>
       <FontAwesome name="google" size={24} color="white" style={styles.socialIcon} />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.facebookButton}>
       <FontAwesome name="facebook" size={24} color="white" style={styles.socialIcon} />
        <Text style={styles.buttonText}>Continue with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 20,
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
  },
  orText: {
    textAlign: 'center',
    color: '#7c7c7c',
    marginVertical: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5383EC',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A66AC',
    padding: 10,
    borderRadius: 10,
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
  },
});

export default SignInScreen;