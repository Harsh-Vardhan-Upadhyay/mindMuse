import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ProjectSuggestions from '../components/ProjectSuggestions';

function ResultsScreen({ route }) {
  const { suggestions } = route.params;

  return (
    <View style={styles.container}>
      <ProjectSuggestions suggestions={suggestions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
  },
});

export default ResultsScreen;