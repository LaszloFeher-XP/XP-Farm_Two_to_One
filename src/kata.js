class Kata {

  longest(s1, s2) {
    return [...s1].concat([...s2]).filter(this.onlyUnique).sort().join('');
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
}

module.exports = {
  Kata,
};