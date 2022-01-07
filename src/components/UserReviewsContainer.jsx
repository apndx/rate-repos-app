import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ReviewItem from './ReviewItem';
import useAuthorizedUser from '../hooks/useAuthorizedUser';

const ItemSeparator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const UserReviewsContainer = () => {

  const { authUser, fetchMore } = useAuthorizedUser(true);

  const onEndReach = () => {
    fetchMore();
  };
  const reviews = authUser?.reviews;
  const usedReviews = reviews
  ? reviews.edges.map(edge => edge.node)
  : [];

  if (reviews) {
    return (
      <FlatList
      data={usedReviews }
      renderItem={({ item }) => <ReviewItem review={item} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      />
    ); 
  } else {
    return null;
  }
};

export default UserReviewsContainer;
