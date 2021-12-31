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
    paddingRight: theme.padding.basic,
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
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.white,
  },
  separator: {
    height: 10,
  },
  rating: {
    width: 50,
    height: 50,
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 25,
    padding: theme.padding.small,
    margin: 10
  }
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.row}> 
      <View style={styles.rating}>
        <Text type='rating'>{review.rating}</Text>
      </View>
      <View style={styles.reviewItem}>
        <Text type='username' fontWeight='bold'>{review.user.username}</Text>
        <Text type='description'>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
        <Text type='review'>{review.text}</Text>
      </View>
    </View>
  );
};

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryItem = ({ id }) => {

  if (id) {
    const repository = useRepository(id); // data.repository

    if (repository) {
      const { reviews } = repository;

      const usedReviews = reviews
      ? reviews.edges.map(edge => edge.node)
      : [];

      return ( repository  && 
        <FlatList
        data={usedReviews }
        renderItem={({ item }) => <ReviewItem review={item} />}
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
 