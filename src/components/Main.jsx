import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SignOut from './SignOut';
import AppBar from './AppBar';
import theme from '../theme';
import SingleRepositoryItem from './SingleRepositoryItem';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackGround
  },
});


const Main = () => {

  return (
    <View style={styles.container}>
    <AppBar/> 
     <Switch>
        <Route path="/signIn" exact>
          <SignIn />
        </Route>
        <Route path="/signOut" exact>
          <SignOut />
        </Route>
        <Route path="/:id" exact
        render={({ match }) => <SingleRepositoryItem id={match.params.id} />}/>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
