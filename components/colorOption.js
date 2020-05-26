import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native';

const ColorOption = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
  
  <Switch 
    onValueChange={toggleSwitch} value={isEnabled} 
    trackColor={{ false: "#767577", true: "#81b0ff" }}
  />

  );
};
