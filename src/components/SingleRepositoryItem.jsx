import React from "react";
import { View, StyleSheet } from 'react-native';
import theme from '../theme';
import useRepository from '../hooks/useRepository';
import RepositoryContent from './RepositoryContent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.padding.basic,
    paddingLeft: theme.padding.basic,
    backgroundColor: theme.colors.white
  }
});

const SingleRepositoryItem = ({ id }) => {

  if (id) {
    const repository = useRepository(id); // data.repository

    if (repository) {
      return ( repository  &&
        <View style={styles.container}> 
          <RepositoryContent repository={repository} git={true}/>
        </View>
        );
    } else {
      return null;
    }
  
  }};

export default SingleRepositoryItem;
 