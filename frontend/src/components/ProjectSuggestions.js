import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, TouchableOpacity, Image, Linking } from 'react-native';
import { ImageBackground } from 'react-native';

const ProjectItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <View style={styles.tagContainer}>
      {item.stack.split(',').map((tag, index) => (
        <View key={index} style={styles.tagWrapper}>
          <Text style={styles.tag}>{tag.trim()}</Text>
        </View>
      ))}
    </View>
    {item.github_link && (
      <TouchableOpacity
        style={styles.button}
        onPress={() => Linking.openURL(item.github_link)}
      >
        <View style={styles.githubIconContainer}>
          <Image
            source={require('../../assets/pngfind.com-github-logo-png-1766942.png')}
            style={styles.githubIcon}
          />
        </View>
        <Text style={styles.buttonText}>Github</Text>
      </TouchableOpacity>
    )}
  </View>
);

function ProjectSuggestions({ suggestions }) {
  return (
    
    <SafeAreaView style={styles.container}>
       <View style={styles.headerWrapper}>
      <ImageBackground 
        source={require('/Users/harshvardhanupadhyay/museMind2.0/frontend/assets/Switch.png')} 
        style={styles.header}
      >
        
       
      </ImageBackground>
      </View>
      <View style={styles.avatarContainer}>
          <Image
            source={require('/Users/harshvardhanupadhyay/museMind2.0/frontend/assets/Avatars (Light version).png')}
            style={styles.avatar}
            
          />
        </View>
      <View style={styles.contentContainer}>

        <FlatList
          data={suggestions}
          renderItem={({ item }) => <ProjectItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
        />
      </View>
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: "white",
    alignItems:"center",
    
  },
  headerWrapper: {
    width: '95%',
    height:169,
    overflow: 'hidden',
    borderRadius: 16,
    borderEndEndRadius:8,
    borderEndStartRadius:8,
    marginTop: 0,
  },
  header: {
    height: 169,
    width:"100%",
    borderRadius:20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignSelf:"center",
    
  },
  avatarContainer: {
    width: 85,
    height: 85,
    borderRadius: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -20,
    marginTop: -40,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    
    
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 30,
  },
  contentContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,

    justifyContent:"center"
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  item: {

    padding: 10,
    paddingLeft:-10,
    marginVertical: 8,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '450',
    marginBottom: 10,
  },
  description: {
    marginBottom: 15,
    fontSize: 14,
    lineHeight: 20,
    color: '#232323',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tagWrapper: {
    backgroundColor: '#F2F4F7',
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 14,
    fontWeight: "400",
    color: '#161619',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#26262B',
    padding: 10,
    borderRadius: 8,
    width:331,
    height:52,
    alignSelf: 'center',
    alignContent:"center",
    justifyContent:"center",
  },
  githubIconContainer: {
    marginRight: 8,
  },
  githubIcon: {
    width: 20,
    height: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProjectSuggestions;