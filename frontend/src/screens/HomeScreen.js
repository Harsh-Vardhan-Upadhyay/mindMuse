import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import PreferenceForm from '../components/PreferenceForm';
import { getProjectSuggestions } from '../services/api';
import CurvedShape from '../components/CurvedShape';
import CircularImageLayout from '../components/CircularImageLayout';

function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (preferences) => {
    setLoading(true);
    try {
      const suggestions = await getProjectSuggestions(preferences);
      navigation.navigate('Results', { suggestions });
    } catch (error) {
      // Error handling
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <CurvedShape height={250} color="#E6E6FA" />
        

        
      </View>
      <View style={{ marginBottom:500,marginLeft:0,}}>
        <CircularImageLayout />
      </View>
      
      
      <View style={styles.bottomSection}>
        <PreferenceForm onSubmit={handleSubmit} loading={loading} />
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topSection: {
    flex: 1,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;