import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/image1.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <View style={styles.contentContainer}>
          <Image
            source={require('./assets/carrot-icon.png')}
            style={styles.carrotIcon}
          />
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.storeText}>to our store</Text>
          <Text style={styles.descriptionText}>Get your groceries in as fast as one hour</Text>
          <TouchableOpacity 
            style={styles.getStartedButton}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  carrotIcon: {
    width: 30,
    height: 36,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  storeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  getStartedButton: {
    backgroundColor: '#53B175',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;