import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { numberRounder } from '../utils';


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
    textAlign: 'center'
  },
  logo: {
    width: theme.logo.width,
    height: theme.logo.height
  },
  language: {
    color: theme.colors.floralwhite,
    backgroundColor: theme.colors.primary
  },
});

const ItemHeader = ({ item }) => (
  <View style={styles.row}> 
    <Image
    style={styles.logo}
    source={{ uri: item.ownerAvatarUrl }}
    />
    <View style={styles.nameDescLanguage}>
      <Text type='heading'> {item.fullName}</Text>
      <Text type='description' >{item.description}</Text>
      <Text type='language'>{item.language}</Text>
    </View>
  </View>
);

const Statistics = ({statistic, text}) => (
  <View style={styles.statistics}>
    <Text fontWeight='bold'>{statistic}</Text>
    <Text type='description'>{text}</Text>
  </View>
);

const RepositoryItem = ({ item }) => (

  <View style={styles.container}> 
    <ItemHeader item={item} />
    <View style={styles.row}>
      <Statistics statistic={numberRounder(item.stargazersCount)} text='Stars'/>
      <Statistics statistic={numberRounder(item.forksCount)} text='Forks'/>
      <Statistics statistic={item.reviewCount} text='Reviews'/>
      <Statistics statistic={item.ratingAverage} text='Rating'/>
    </View>
  </View>
  );
  
export default RepositoryItem;
