const SolutionTwo = () => {
  // take input of floors
  var input = [1, 2, 3, 3, 0];
  function diff(ary) {
    var newA = [];
    // loop through each value...
    for (var i = 1; i < ary.length; i++)
      // and compare abs value to the next
      // then push that value into a new array
      newA.push(Math.abs(ary[i] - ary[i - 1]));
    return newA;
  }

  // will need to .reduce() those values to get the total distance traveled

  console.log(diff(input));
};
export default SolutionTwo;
