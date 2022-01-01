export const numberRounder = (amount) => {

  if (amount >= 1000) {
    return parseFloat((amount / 1000)).toFixed(1).toString() + ' k';
  }
  return amount;
};

export const selectOrder = (orderBy) => {
  switch(orderBy) {
    case 'latest':
      return ['CREATED_AT', 'DESC']; 
    case 'highestRated':
      return ['RATING_AVERAGE', 'DESC']; 
    case 'lowestRated':
        return ['RATING_AVERAGE', 'ASC']; 
    default:
      return ['CREATED_AT', 'DESC']; 
  }
};
