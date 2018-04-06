const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

// returns an array of strings containing what instruments each musician plays

function theBeatlesPlay(musicians, instruments) {
  const beatleSentence = [];
  
  for (let i = 0; i < 1; i++) {
  beatleSentence.push(`${musicians[i]} plays ${instruments[i]}`);
}
  return beatleSentence;
}

function iLoveTheBeatles(n) {
  const array = [];
  
    do {
      array.push("I love the Beatles!");
      n++;
    } while(n < 15);
    
  return array;
}