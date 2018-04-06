const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

// returns an array of strings containing what instruments each musician plays

function theBeatlesPlay(musicians, instruments) {
  const beatleSentence = [];
  
  for (let i = 0; i < 4; i++) {
  beatleSentence.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatleSentence;
}

// returns an array of strings with exclamation points

function johnLennonFacts(array) {
  const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
  
    let i = 0;
    while (i < 4) {
      array.push(`${facts[i]}!!!`);
      i++;
    }
  return facts;
}

/* returns an array of 'I love the Beatles!' 8 times when passed the parameter 7
returns an array of 'I love the Beatles!' once when passed the parameter 17 */

function iLoveTheBeatles(n) {
  const array = [];
  
    do {
      array.push("I love the Beatles!");
      n++;
    } while(n < 15);
    
  return array;
}