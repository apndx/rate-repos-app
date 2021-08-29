import React from 'react';

import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';
import theme from '../theme';
import Constants from 'expo-constants';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: theme.colors.appBarBackground,
    paddingTop: Constants.statusBarHeight
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 20
  },
});

const AppBar = () => {
  const authStatus = useAuthorizedUser();
  console.log('auth status', authStatus);

  return <View style={styles.container}>
            <ScrollView style={styles.row} horizontal={true}>
              <Link to='/'>
              <Text type='tab'>Repositories</Text>
              </Link>
              {!authStatus &&  <Link to='/signIn'>
              <Text type='tab'>Sign In</Text>
              </Link>}
              {authStatus &&  <Link to='/signOut'>
              <Text type='tab'>Sign Out</Text>
              </Link>}
            </ScrollView>
          </View>;
};

export default AppBar;
