import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const MindMuseProjectFinder = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("/Users/harshvardhanupadhyay/museMind2.0/frontend/assets/bgd.png")}
        style={styles.imageBackground}
      >
        <View style={styles.content}>
          <View style={styles.info}>
            <View>
              <Image
                source={require("/Users/harshvardhanupadhyay/museMind2.0/frontend/assets/Rectangle.png")}
              />
            </View>

            <View style={styles.header}>
              <Image
                source={require("/Users/harshvardhanupadhyay/museMind2.0/frontend/assets/Image.png")}
                style={styles.logo}
              />
              <Text style={styles.mindMuseText}>mindMuse</Text>
            </View>
          </View>
          <View style={styles.textContainer}>
           
          </View>
          <View style={styles.illustrationContainer}></View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover", // Ensures the image covers the entire background
  },
  content: {
    flex: 1,
    padding: 20,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    height: 28,
    width: 101.23,
    backgroundColor: "#E9E8E8",
    borderRadius: 1075,
  },
  logo: {
    width: 14,
    height: 14,
    marginRight: 5,
  },
  mindMuseText: {
    fontSize: 12.92,
    fontWeight: "bold",
    color: "#7A7FEF",
  },
  textContainer: {
    marginBottom: 20,
    zIndex: 1, // Ensure text is above the illustration
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
  },
  illustrationContainer: {
    position: "absolute",
    bottom: -60, // Adjust this value to move the image up or down
    right: -50, // Negative value moves the image to the right, off the screen partially
    width: 247,
    height: 247,
  },
  cloudIllustration: {
    width: "100%",
    height: "100%",
  },
});

export default MindMuseProjectFinder;