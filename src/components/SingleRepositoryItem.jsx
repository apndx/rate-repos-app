import React from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import theme from '../theme';
import useRepository from '../hooks/useRepository';
import RepositoryContent from './RepositoryContent';
import Text from './Text';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.padding.basic,
    paddingLeft: theme.padding.basic,
    backgroundColor: theme.colors.white
  },
  reviewItem: {
    flex: 1,
    backgroundColor: theme.colors.white,
    flexDirection: 'column',
    justifyContent: 'space-around',
    textAlign: 'center',
    padding: theme.padding.small,
  },
});

const ReviewItem = ({ review }) => {
  // Single review item
  return (
    <View style={styles.reviewItem}> 
    <Text type='rating'>{review.rating}</Text>
    <Text type='username'>{review.user.username}</Text>
    <Text type='created'>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
    <Text type='review'>{review.text}</Text>
  </View>
  );
};


const SingleRepositoryItem = ({ id }) => {

  if (id) {
    const repository = useRepository(id); // data.repository

    if (repository) {
      const { reviews } = repository;
      console.log(reviews);

      const usedReviews = reviews
      ? reviews.edges.map(edge => edge.node)
      : [];

      return ( repository  && 
        <FlatList
        data={usedReviews }
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <RepositoryContent repository={repository} git={true}/>}
        />
        );
    } else {
      return null;
    }
  
  }};

export default SingleRepositoryItem;
 