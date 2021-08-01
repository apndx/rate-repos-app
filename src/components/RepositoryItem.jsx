import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

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
    justifyContent: 'flex-start',
    padding: theme.padding.small,
    flexWrap: 'wrap'
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
  heading: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary
  },
  description: {
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    color: theme.colors.textSecondary
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
      <Text style={styles.heading}> {item.fullName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text tab='language'>{item.language}</Text>
    </View>
  </View>
);

const Statistics = ({statistic, text}) => (
  <View style={styles.statistics}>
    <Text>{statistic}</Text>
    <Text>{text}</Text>
  </View>
);

const RepositoryItem = ({ item }) => (

  <View style={styles.container}> 
    <ItemHeader item={item} />
    <View style={styles.row}>
      <Statistics statistic={item.stargazersCount} text='Stars'/>
      <Statistics statistic={item.forksCount} text='Forks'/>
      <Statistics statistic={item.reviewCount} text='Reviews'/>
      <Statistics statistic={item.ratingAverage} text='Rating'/>
    </View>
  </View>
  );
  
export default RepositoryItem;
