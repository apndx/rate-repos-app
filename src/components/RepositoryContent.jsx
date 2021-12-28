
import React, { useCallback } from "react";
import { View, StyleSheet,  Alert, Pressable, Image } from 'react-native';
import Text from './Text';
import { numberRounder } from '../utils';
import theme from '../theme';
import * as Linking from 'expo-linking';

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


const ItemHeader = ({ item }) => (
  <View style={styles.row}> 
    <Image
    style={styles.logo}
    source={{ uri: item.ownerAvatarUrl }}
    />
    <View style={styles.nameDescLanguage}>
      <Text type='heading' testID='fullName'> {item.fullName}</Text>
      <Text type='description' testID='description' >{item.description}</Text>
      <Text type='language' testID='language'>{item.language}</Text>
    </View>
  </View>
);

const Statistics = ({statistic, text, testID}) => (
  <View style={styles.statistics}>
    <Text testID={testID} fontWeight='bold'>{statistic}</Text>
    <Text type='description'>{text}</Text>
  </View>
);

const RepositoryContent = ({repository, git}) => (

  <View style={styles.container}> 
   <ItemHeader item={repository} />
   <View style={styles.row}>
     <Statistics testID='starGazerCount' statistic={numberRounder(repository.stargazersCount)} text='Stars'/>
     <Statistics testID='forksCount' statistic={numberRounder(repository.forksCount)} text='Forks'/>
     <Statistics testID='reviewCount' statistic={repository.reviewCount} text='Reviews'/>
     <Statistics testID='ratingAverage' statistic={repository.ratingAverage} text='Rating'/>
   </View>
        {git && 
          <View style={styles.row}>
            <OpenURLButton styles={styles} url={repository.url} title="Open in GitHub" testID="gitLink">
        </OpenURLButton>
 </View>}
 </View>
);

const OpenURLButton = ({ url, title, styles }) => {
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

  return <Pressable style={styles.button} onPress={handlePress} >
            <Text style={styles.buttonText}>{title}</Text>
          </Pressable>;
};

export default RepositoryContent;
