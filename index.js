function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  
  for(var i = 0; i < 4; i++) {
    
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`) ;
    
  }
  
  return emptyArray ;
}

function johnLennonFacts(array) {
   let n = 0;
   var newArray = [] ; 
   const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
   
  while (n < array.length) { 
    
            array.push(`${array[n]}!!!`) ; 
          n ++;
          return newArray;
        
  }
}
 
     
