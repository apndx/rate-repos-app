import React from 'react';
import { View, StyleSheet, Pressable, Alert, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: theme.padding.basic,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  tabText: {
    color: theme.colors.textSecondary,
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold
  }
});

const Tab = () => {
  return (
    <Pressable
      onPress={() => Alert.alert('You pressed the text!')}
    >
      <Text style={styles.tabText}>Repositories</Text>
    </Pressable>
  );
};

const AppBar = () => {
  return <View style={styles.container}>{/* ... */}
          <Tab></Tab>
        </View>;
};

export default AppBar;
