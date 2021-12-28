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
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  nameDescLanguage: {
    flexDirection: 'column',
    padding: theme.padding.small,
    flexShrink: 1
  },
  statistics: {
    flex: 1,
    backgroundColor: theme.colors.white,
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'center',
    padding: theme.padding.small,
  },
  logo: {
    width: theme.logo.width,
    height: theme.logo.height
  },
  language: {
    color: theme.colors.floralwhite,
    backgroundColor: theme.colors.primary
  },
  button: {
    height: theme.button.height,
    width: theme.button.width,
    paddingHorizontal: theme.button.paddingHorizontal,
    backgroundColor: theme.colors.primary,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  error: {
    marginBottom: 20,
    height: 17.5,
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold
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
