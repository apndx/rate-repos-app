export const numberRounder = (amount) => {

  if (amount >= 1000) {
    return parseFloat((amount / 1000)).toFixed(1).toString() + ' k';
  }
  return amount;
};
