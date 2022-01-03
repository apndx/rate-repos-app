import React, { useState, useMemo } from 'react';
import { FlatList, View, StyleSheet, TextInput } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker';
import theme from '../theme';
import debounce from 'lodash.debounce';

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
  },
  input: {
    height: theme.button.height,
    width: theme.button.width,
    backgroundColor: theme.colors.white,
    padding: theme.padding.small,
    marginLeft: theme.margins.basic,
    marginTop: theme.margins.basic,
    borderStyle: theme.border.style,
    borderRadius: theme.border.borderRadius,
    borderWidth: theme.border.borderWidth,
    borderColor: theme.colors.white
  },
});

const RepositoryListHeader = ({orderBy, setOrderBy, setSearchKeyword}) => {

  const debouncedChangeHandler = useMemo(
    () => debounce(setSearchKeyword, 500), []);

  return (
  <View style={styles.container}>
    <TextInput 
      name="search" 
      placeholder="Search" 
      testID="searchField"
      style={styles.input}        
      onChangeText={debouncedChangeHandler}/>
    <Picker 
      style={styles.picker}
      selectedValue={orderBy}
      onValueChange={(itemValue) => setOrderBy(itemValue)}>
    <Picker.Item label='Latest repositories' value='latest' />
    <Picker.Item label='Highest rated repositories' value='highestRated' />
    <Picker.Item label='Lowest rated repositories' value='lowestRated' />
  </Picker>
</View>);
};
 
const RepositoryListContainer = () => {
  
  const [orderBy, setOrderBy] = useState('latest');
  const [searchKeyword, setSearchKeyword] = useState('');

  const { repositories, fetchMore } = useRepositories(orderBy, searchKeyword);

  const onEndReach = () => {
    fetchMore();
  };

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={<RepositoryListHeader 
          orderBy={orderBy} 
          setOrderBy={setOrderBy}
          setSearchKeyword={setSearchKeyword}
          />}
      />
    );
};

export default RepositoryListContainer;
