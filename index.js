const theProblem = {

  digitSort: (string) => Number(string.split('').sort((a,b) => a-b).join('')),

  kaprekarsConstant: (string) => {
    let res = 1;
    let asc = Number(string.split('').sort((a,b) => a-b).join(''));
    let desc = Number(string.split('').sort((a,b) => b-a).join(''));
    let num2;
    if (desc-asc < 1000) num2 = '0' + (desc - asc).toString();
    else num2 = (desc - asc).toString();
    if (num2 !== '6174') res = res + theProblem.kaprekarsConstant(num2);
    return res;
  },

}

module.exports = theProblem;