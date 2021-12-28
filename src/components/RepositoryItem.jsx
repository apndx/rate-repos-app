import React from 'react';
import { View, Image, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { numberRounder } from '../utils';
import { useHistory } from 'react-router-native';
import useRepository from '../hooks/useRepository';
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

const RepositoryItem = ({ id, item, list }) => {
  
  const history = useHistory();

  console.log('id', id);

  const handleClick = () => {
    history.push(`/${item.id}`);
  };

  const handleLink = (url) => {
    Linking.openURL(url);
    console.log(url);
  };

  if (id && !list) {
    console.log('id', id);
    const repository = useRepository(id); // data.repository
    console.log('repo', repository);

    if (repository) {
      return ( repository  &&
        <View style={styles.container}> 
          <RepositoryContent repository={repository} git={true} handleLink={handleLink}/>
        </View>
        );
    } else {
      return null;
    }
  
  }
  
  if (list) {
    return  (
      <View style={styles.container}> 
        <Pressable onPress={handleClick} testID="repository">
          <RepositoryContent repository={item} git={false}/>
        </Pressable>
      </View>
    );  
  }
  };


const RepositoryContent = ({repository, git, handleLink}) => (

   <View style={styles.container}> 
    <ItemHeader item={repository} />
    <View style={styles.row}>
      <Statistics testID='starGazerCount' statistic={numberRounder(repository.stargazersCount)} text='Stars'/>
      <Statistics testID='forksCount' statistic={numberRounder(repository.forksCount)} text='Forks'/>
      <Statistics testID='reviewCount' statistic={repository.reviewCount} text='Reviews'/>
      <Statistics testID='ratingAverage' statistic={repository.ratingAverage} text='Rating'/>
      {git && 
        <Pressable style={styles.button} onPress={handleLink(repository.url)} testID="gitLink">
          <Text style={styles.buttonText}>Open in GitHub </Text>
        </Pressable>}
    </View>
  </View>
);


export default RepositoryItem;
