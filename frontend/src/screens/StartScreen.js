import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Start.png')} // Make sure to add your background image
        style={styles.backgroundImage}
      />
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/Image.png')} // Add your hand icon image
            style={styles.handIcon}
          />
          <Text style={styles.logoText}>mindMuse</Text>
        </View>
        <Text style={styles.title}>Projects for Everyone</Text>
        <View style={styles.charactersContainer}>
          {/* Add your 3D character images here */}
        </View>
        <View style={styles.spacer} /> 
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Get started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  backgroundImage: {
    position: 'absolute',
    width: width,
    height: height,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start', 
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
 
  
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:100

  },
  handIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#7A7FEF',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 0,
  },

  button: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 30,
    height:70,
    width:314,
    alignItems: 'center',
    alignSelf:"center",

    
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  spacer: {
    flex: 1, // This will take up all the available space and push the button to the bottom
  },
});

export default StartScreen;