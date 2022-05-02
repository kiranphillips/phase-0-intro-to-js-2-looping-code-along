//const namesArray = ["Guadalupe,", "Ollie,", "Aki,"];
function writeCards(arrayOfnames, event) {
  let thankYoucard = []
  for (let i = 0; i < arrayOfnames.length; i++) {
    thankYoucard.push(`Thank you, ${arrayOfnames[i]}, for the wonderful ${event} gift!`);
  }
return thankYoucard
}
function countDown(countDown){
while(countDown >= 0)
console.log(countDown--);
}
//writeCards(namesArray);
