import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import '../config/i18next-config';
import i18next from "i18next";


const LenguageButton = () => {
  const [currentLanguage, updateCurrentLanguage] = React.useState('es');

  const handleLanguage = () => {
    // Update current language state
    const newLanguage = currentLanguage==='es' ? 'en' : 'es';
    updateCurrentLanguage(newLanguage);
    // Change language on application
    i18next.changeLanguage(newLanguage);
  }

  return (
    <TouchableOpacity onPress={() => handleLanguage()} style={styles.screenContainer}>
      <MaterialIcons name="language" size={34} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});

export default LenguageButton;



