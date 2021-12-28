import React, { useCallback } from "react";
import { View, StyleSheet,  Alert, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';
import useRepository from '../hooks/useRepository';
import * as Linking from 'expo-linking';
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

const SingleRepositoryItem = ({ id }) => {
  
  console.log('tänne vain id', id);

  const handleLink = (url) => {
    Linking.openURL(url);
    console.log(url);
  };

  if (id) {
    console.log('id', id);
    const repository = useRepository(id); // data.repository
    console.log('repo', repository);

    if (repository) {
      return ( repository  &&
        <View style={styles.container}> 
          <RepositoryContent repository={repository} git={true} handleLink={handleLink}/>
          <OpenURLButton style={styles.button} onPress={handleLink(repository.url)} testID="gitLink">
              <Text style={styles.buttonText}>Open in GitHub </Text>
            </OpenURLButton>
        </View>
        );
    } else {
      return null;
    }
  
  }
  
  };
  const OpenURLButton = ({ url }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Pressable style={styles.button} onPress={handlePress(url)} testID="gitLink">
          <Text style={styles.buttonText}>Open in GitHub </Text>
        </Pressable>;
  };

export default SingleRepositoryItem;
