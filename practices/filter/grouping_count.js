'use strict';

function grouping_count(collection) {
  const hash = {};

  collection.forEach(element => {
    let nextCount = hash[element] ? hash[element] + 1 : 1;
    hash[element] = nextCount;
  });

  return hash;
}

module.exports = grouping_count;
