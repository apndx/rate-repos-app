import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (

  <RepositoryItem item={item} list={true} />
);

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const RepositoryListContainer = ({ repositories }) => {

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
      />
    );
};

export default RepositoryListContainer;
