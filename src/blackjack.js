var currentBet = {
  total : 0,
  oneHundred : 0,
  fiveHundred : 0,
  oneThousand : 0,
  fiveThousand : 0,
};

// States: {0 : pre-deal/betting, 1 : deal, 2 : hit/stand, 3 : dealer, 4 : results}
var status = 0;

function bet(){
  currentBet.oneHundred = document.getElementById('one-hundred').value;
  currentBet.fiveHundred = document.getElementById('five-hundred').value;
  currentBet.oneThousand = document.getElementById('one-thousand').value;
  currentBet.fiveThousand = document.getElementById('five-thousand').value;
  currentBet.total =
    (currentBet.oneHundred * 100) +
    (currentBet.fiveHundred * 500) +
    (currentBet.oneThousand * 1000) +
    (currentBet.fiveThousand * 5000));
  console.log(total);
  document.getElementById('player-bet').innerHTML = total;
}
