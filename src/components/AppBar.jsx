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
    paddingTop: Constants.statusBarHeight,
    paddingBottom: theme.padding.basic,
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: theme.margins.basic
  },
});

const AppBar = () => {
  
  const { authStatus } = useAuthorizedUser(false);

  return <View style={styles.container}>
            <ScrollView style={styles.row} horizontal={true}>
              <Link to='/'>
                <Text type='tab'>Repositories</Text>
              </Link>
              {authStatus &&  <Link to='/review'>
                <Text type='tab'>Create a review</Text>
              </Link>}
              {authStatus &&  <Link to='/userReviews'>
                <Text type='tab'>My reviews</Text>
              </Link>}
              {!authStatus &&  <Link to='/signIn'>
                <Text type='tab'>Sign in</Text>
              </Link>}
              {!authStatus &&  <Link to='/signUp'>
                <Text type='tab'>Sign up</Text>
              </Link>}
              {authStatus &&  <Link to='/signOut'>
                <Text type='tab'>Sign out</Text>
              </Link>}
            </ScrollView>
          </View>;
};

export default AppBar;
