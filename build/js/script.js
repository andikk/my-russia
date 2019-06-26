// НАЧАЛО БЛОКА для отображения и скрытия деталий
var detailsShown = false;

var details = document.querySelector("#details");
var detailsSpan = document.querySelector("#details-span");

var toogler = document.querySelector(".toogler");
var tooglerText = toogler.querySelector(".toogler__text");
var tooglerIcon = toogler.querySelector(".toogler__icon img");

toogler.addEventListener("click", function() {
  console.log(detailsShown);
  detailsShown=!detailsShown;

  if (detailsShown) {
    details.style.display = "block";
    detailsSpan.style.display = "inline";
    tooglerText.textContent = "Скрыть";
    tooglerIcon.src = "img/ico-arrow-up.png";

  } else {
    details.style.display = "none";
    detailsSpan.style.display = "none";
    tooglerText.textContent = "Читать дальше";
    tooglerIcon.src = "img/ico-arrow-down.svg";
  }

})
// КОНЕЦ БЛОКА для отображения и скрытия деталий

// НАЧАЛО БЛОКА для отображения карточек
//функция для формирования (загрузки) массива с карточками
var loadData = function () {
  var arrayWithCards = [];
  for (var i = 1; i <= 7; i++) {
    var cardToAdd = {
      'title': 'Заголовок карточки ' + i,
      'text': 'Текст карточки ' + i
    }
    arrayWithCards.push(cardToAdd);
  }
  return arrayWithCards;
}

var cards = loadData();

var cardTemplate = document.querySelector('#card-template').content.querySelector('.sub-section__part--cards');
var blockForCard = document.querySelector(".sub-section--cards");

var btn = document.querySelector('.sub-section__nav-btn');

var renderCard = function(numberOfCards){
  for (var j=1; j<=numberOfCards; j++) {
    var newCard = cardTemplate.cloneNode(true);
    var newCardTitle = newCard.querySelector('.card__title');
    newCardTitle.textContent = cards[k-1].title;
    var newCardText = newCard.querySelector('.card__text');
    newCardText.textContent = cards[k-1].text;
    blockForCard.appendChild(newCard);
  }
}

var pages = document.querySelector('#pages');
var k = 0;
var needToRender = true;
btn.addEventListener('click', function() {
  k = k + 1;
  switch (k) {
    case 1:
      pages.textContent = '4 из 7';
      if (needToRender) {
        renderCard(2);
      } else {
        addedCards[0].style.display = 'block';
        addedCards[1].style.display = 'block';
      }
      break;
    case 2:
      pages.textContent = '6 из 7';
      if (needToRender) {
        renderCard(2);
      } else {
        addedCards[2].style.display = 'block';
        addedCards[3].style.display = 'block';
      }
      break;
    case 3:
      pages.textContent = '7 из 7';
      if (needToRender) {
        renderCard(1);
      } else {
        addedCards[4].style.display = 'block';
      }
      break;
  }

  if (k > 3) {
    k = 0;
    needToRender = false;
    pages.textContent = '2 из 7';
    addedCards = document.querySelectorAll('.sub-section__part--added');
    for (var n=0; n<addedCards.length; n++ ) {
      addedCards[n].style.display = 'none';
    }

  }

})

