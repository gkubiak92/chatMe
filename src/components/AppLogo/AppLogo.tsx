import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AppLogo = () => (
  <View style={styles.logoContainer}>
    <Text style={styles.logo}>ChatMe</Text>
  </View>
);

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 48,
  },
});

export default AppLogo;
