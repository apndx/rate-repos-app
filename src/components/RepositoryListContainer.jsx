import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import theme from '../theme';

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (

  <RepositoryItem item={item} />
);

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  picker: {
    margin: theme.padding.big
  }
});

const RepositoryListContainer = () => {
  
  const [orderBy, setOrderBy] = useState('latest');

  const { repositories } = useRepositories(orderBy);

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        ListHeaderComponent={() => 
          <Picker style={styles.picker}
            selectedValue={orderBy}
            onValueChange={(itemValue, itemIndex) =>
              setOrderBy(itemValue)
            }>
            <Picker.Item label='Latest repositories' value='latest' />
            <Picker.Item label='Highest rated repositories' value='highestRated' />
            <Picker.Item label='Lowest rated repositories' value='lowestRated' />
          </Picker>}
      />
    );
};

export default RepositoryListContainer;