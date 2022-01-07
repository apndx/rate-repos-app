import React from 'react';
import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import theme from '../theme';
import Text from './Text';

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

const ReviewItem = ({ review, userReviews }) => {
  return (
    <View style={styles.row}> 
      <View style={styles.rating}>
        <Text type='rating'>{review.rating}</Text>
      </View>
      <View style={styles.reviewItem}>
        {userReviews ? 
        <Text type='repositoryname' fontWeight='bold'>{review.repositoryId}</Text> :
        <Text type='username' fontWeight='bold'>{review.user.username}</Text> }      
        <Text type='description'>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>
        <Text type='review'>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
