import React from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import theme from '../theme';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.appBarBackground,
    paddingTop: Constants.statusBarHeight
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 20
  },
});


const AppBar = () => {
  return <View style={styles.container}>
            <ScrollView style={styles.row} horizontal={true}>
              <Link to='/'>
              <Text type='tab'>Repositories</Text>
              </Link>
              <Link to='/signIn'>
              <Text type='tab'>Sign In</Text>
              </Link>
            </ScrollView>
          </View>;
};

export default AppBar;
