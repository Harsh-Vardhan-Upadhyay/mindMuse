import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text, Modal, TouchableOpacity, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';

function PreferenceForm({ onSubmit, loading }) {
  const [preferences, setPreferences] = useState({
    domain: '',
    tech: '',
    stack: '',
    proficiency: '',
  });

  const [modalVisible, setModalVisible] = useState({
    domain: false,
    tech: false,
    proficiency: false,
  });

  const handleChange = (name, value) => {
    setPreferences(prev => ({ ...prev, [name]: value }));
    setModalVisible(prev => ({ ...prev, [name]: false }));
  };

  const handleSubmit = () => {
    const { domain, tech, stack, proficiency } = preferences;
    if (!domain || !tech || !stack || !proficiency) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    onSubmit(preferences);
  };

  const domains = ['Health', 'Finance', 'Education', 'Entertainment', 'Technology'];
  const techs = ['Web Development', 'Mobile Development', 'Machine Learning', 'Data Science', 'AI Development'];
  const proficiencies = ['Beginner', 'Intermediate', 'Advanced'];

  const openModal = (name) => {
    setModalVisible(prev => ({ ...prev, [name]: true }));
  };

  const renderDropdown = (name, options, placeholder) => (
    <View style={styles.dropdownContainer}>
      <TouchableOpacity onPress={() => openModal(name)} style={styles.dropdownContent}>
        <View style={styles.textContainer}>
          <Text style={styles.dropdownText}>{preferences[name] || placeholder}</Text>
        </View>
        <Text style={styles.dropdownArrow}>+</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible[name]} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {Platform.OS === 'ios' ? (
              <Picker
                selectedValue={preferences[name]}
                onValueChange={(itemValue) => handleChange(name, itemValue)}
                itemStyle={styles.pickerItem}
              >
                <Picker.Item label={placeholder} value="" />
                {options.map(option => (
                  <Picker.Item key={option} label={option} value={option} />
                ))}
              </Picker>
            ) : (
              options.map(option => (
                <TouchableOpacity
                  key={option}
                  style={styles.modalItem}
                  onPress={() => handleChange(name, option)}
                >
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))
            )}
          </View>
        </View>
      </Modal>
    </View>
  );

  return (
    <View style={styles.parentContainer}>
      <View style={styles.container}>
        <View style={styles.form}>
          {/* Label for Select Domain */}
          <Text style={styles.labelText}>Select Domain</Text>
          {renderDropdown('domain', domains, 'Domain')}

          {/* Label for Select Technology */}
          <Text style={styles.labelText}>Select Technology</Text>
          {renderDropdown('tech', techs, 'Technology')}

          {/* Label for Select Proficiency */}
          <Text style={styles.labelText}>Select Proficiency</Text>
          {renderDropdown('proficiency', proficiencies, 'Proficiency')}

          <Text style={styles.labelText}>Enter Tech Stack</Text>

          <View style={styles.stackInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Preferred Tech Stack (Flutter, React)"
              placeholderTextColor="#a0a0a0"
              value={preferences.stack}
              onChangeText={(text) => handleChange('stack', text)}
            />
          </View>

          <TouchableOpacity
            style={[styles.button, loading && styles.disabledButton]}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.buttonText}>Get Projects</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: '100%',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    borderRadius: 45,
    width: 370,
    height: 471,
    marginBottom: 0,
  },
  form: {
    width: '100%',
    padding: 19,
  },
  dropdownContainer: {
    marginBottom: 20,
  },
  dropdownContent: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor:"#D2D2D2",
    borderWidth: 1,
    borderRadius: 31,
    height: 48,
    width: 320,
    paddingLeft: 10,
    alignSelf: "center",
    paddingLeft:30
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 12,
    color: 'black',
  },
  dropdownArrow: {
    fontSize: 24,
    color: 'black',
    paddingRight: 15,
  },
  labelText: {
    fontSize: 14,
    color: '#191919',
    marginBottom: 8,
    fontWeight:"500",
    marginLeft: 30,
  },
  stackInputContainer: {
    marginBottom: 20,
    alignSelf:"center",
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    borderColor:"#D2D2D2",
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 31,
    color: 'black',
    fontSize: 12,
    width: 320,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#26262B',
    padding: 15,
    width: 343,
    height: 70,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    alignSelf: "center",
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '500',
    fontSize: 16,
  },
  disabledButton: {
    opacity: 0.5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  pickerItem: {
    fontSize: 22,
  },
});

export default PreferenceForm;