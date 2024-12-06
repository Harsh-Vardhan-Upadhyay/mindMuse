import axios from 'axios';
import { Alert, Platform } from 'react-native';


let API_URL;

if (__DEV__) {
  // Development mode
  if (Platform.OS === 'ios') {
    // iOS Simulator
    // API_URL = 'add yours';
   
  } else if (Platform.OS === 'ios') {
    // Android Emulator
// API_URL = 'add yours';
  } else  {
    // Expo Go on physical device (replace with your computer's local IP address)
// API_URL = 'add yours';
  }
} else {
  // Production mode - replace with your actual production API URL
// API_URL = 'add yours';
}

export const getProjectSuggestions = async (preferences) => {
  try {
    const response = await axios.post(`${API_URL}suggest/`, preferences);
    
    if (Array.isArray(response.data) && response.data.length === 0) {
      Alert.alert('No Projects Found', 'No projects match your input fields. Try adjusting your preferences.');
      return [];
    }
    
    return response.data;
  } catch (error) {
    console.error('Error fetching project suggestions:', error);
    
    if (error.response && error.response.status === 404 && error.response.data.message === "No matching projects found.") {
      Alert.alert('No Projects Found', 'No projects match your input fields. Try adjusting your preferences.');
      return [];
    } else {
      Alert.alert('Error', `Failed to fetch project suggestions. Please try again. ${error.message}`);
      throw error;
    }
  }
};