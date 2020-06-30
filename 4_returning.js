const makingBreakfast = (done) => {
  const preparedFood = [];

  console.log('Putting potatoes in the oven...');
  setTimeout(() => {
    console.log('Potatoes are done');
    preparedFood.push('potatoes');

    done(preparedFood);
  }, 3000);

  console.log('Putting bacon in the oven...');
  setTimeout(() => {
    console.log('Bacon is done');
    preparedFood.push('bacon');
  }, 1000);

  console.log('Frying eggs sunny side up');
  console.log('Eggs are done');
  preparedFood.push('eggs');

  return preparedFood;
};

const breakfast = makingBreakfast((food) => {
  // console.log('Is my food done yet???', food);
  console.log('Getting grapes out of the fridge');
  food.push('grapes');
  console.log(`Here is your breakfast made of ${food.join(', ')}.`);
});

// console.log('Is my food done?', breakfast);
