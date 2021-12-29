import React from "react";
import { FlatList, StyleSheet, View } from 'react-native';
import theme from '../theme';
import useRepository from '../hooks/useRepository';
import RepositoryContent from './RepositoryContent';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.padding.basic,
    paddingLeft: theme.padding.basic,
    backgroundColor: theme.colors.white
  }
});

const ReviewItem = ({ review }) => {
  // Single review item
  <View style={styles.container}> 
    <Text type='rating'>{review.rating}</Text>
    <Text type='username'>{review.user.username}</Text>
    <Text type='created'>{review.createdAt}</Text>
    <Text type='review'>{review.text}</Text>
  </View>;
};



const SingleRepositoryItem = ({ id }) => {

  if (id) {
    const repository = useRepository(id); // data.repository

    if (repository) {
      return ( repository  &&

        <FlatList
        data={repository.reviews}
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
 