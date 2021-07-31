import React from 'react';
import AppBar from './AppBar';

import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});


const Main = () => {
  return (
    <View style={styles.container}>
     <AppBar></AppBar>
      <RepositoryList></RepositoryList>
    </View>
  );
};

export default Main;
