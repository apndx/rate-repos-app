import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import { useHistory } from 'react-router-native';
import RepositoryContent from './RepositoryContent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.padding.basic,
    paddingLeft: theme.padding.basic,
    backgroundColor: theme.colors.white
  }
});

const RepositoryItem = ({ item }) => {
  
  const history = useHistory();

  const handleClick = () => {
    history.push(`/${item.id}`);
  };

  if (item) {
    return ( <View style={styles.container}> 
      <Pressable onPress={handleClick} testID="repository">
        <RepositoryContent repository={item} />
      </Pressable>
    </View>
  ); 
  } else {
    return null;
  }
  
};

export default RepositoryItem;
