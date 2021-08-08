import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import theme from '../theme';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.appBarBackground,
    padding: theme.padding.basic,
    paddingTop: Constants.statusBarHeight,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
});


const AppBar = () => {
  return <View style={styles.container}>
            <View style={styles.row}>
              <Link to='/'>
              <Text type='tab'>Repositories</Text>
              </Link>
              <Link to='/signIn'>
              <Text type='tab'>Sign In </Text>
              </Link>
            </View>
        </View>;
};

export default AppBar;
