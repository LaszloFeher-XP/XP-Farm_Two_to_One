class Kata {

  longest(s1, s2) {
    const newArr = [...s1].concat([...s2]);
    return newArr.filter(this.onlyUnique).sort().join('');
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
}

module.exports = {
  Kata,
};