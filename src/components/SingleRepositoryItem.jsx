import React from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import useRepository from '../hooks/useRepository';
import RepositoryContent from './RepositoryContent';
import ReviewItem from './ReviewItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },

});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryItem = ({ id }) => {

  if (id) {
    const { repository, fetchMore } = useRepository(id);

    if (repository) {
      const { reviews } = repository;

      const usedReviews = reviews
      ? reviews.edges.map(edge => edge.node)
      : [];

      const onEndReach = () => {
        fetchMore();
      };

      return ( repository  && 
        <FlatList
        data={usedReviews }
        renderItem={({ item }) => <ReviewItem review={item} />}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={() => <RepositoryContent repository={repository} git={true}/>}
        />
        );
    } else {
      return null;
    }
  
  }};

export default SingleRepositoryItem;
 