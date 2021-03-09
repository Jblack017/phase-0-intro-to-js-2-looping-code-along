//Thank you card creator

//
const name = [ 'Lisa', 'Kaitlin', 'Jan' ];
const cards = []

function writeCards(name, var2 = "surprise") {
  for (let i = 0; i < name.length; i++) {
    
    cards.push(`Thank you, ${name[i]}, for the wonderful ${var2} gift!`);
    
    }
    
    return cards;
}

writeCards(cards); 


function countDown(var1) {

    let countUp = var1;
while (countUp >= 0) {
  console.log(countUp--);

    } 
return var1
}