// НАЧАЛО БЛОКА для отображения и скрытия деталий
var detailsShown = false;

var details = document.querySelector('#details');
var detailsSpan = document.querySelector('#details-span');

var toogler = document.querySelector('.toogler');
var tooglerText = toogler.querySelector('.toogler__text');
var tooglerIcon = toogler.querySelector('.toogler__icon img');

toogler.addEventListener('click', function() {
  detailsShown=!detailsShown;

  if (detailsShown) {
    details.style.display = 'block';
    detailsSpan.style.display = 'inline';
    tooglerText.textContent = 'Скрыть';
    tooglerIcon.src = 'img/ico-arrow-up.png';

  } else {
    details.style.display = 'none';
    detailsSpan.style.display = 'none';
    tooglerText.textContent = 'Читать дальше';
    tooglerIcon.src = 'img/ico-arrow-down.svg';
  }

})
// КОНЕЦ БЛОКА для отображения и скрытия деталий

// НАЧАЛО БЛОКА для плейсхолдера
var input = document.querySelector('.form-subscribe__email');
input.addEventListener('click', function (){
  input.placeholder = 'Введите email';
});
// КОНЕЦ БЛОКА для плейсхолдера

var sectionsArr = [];

var updatePositions = function () {
  sectionsArr.length = 0;
  var sections = document.querySelectorAll(".section__title");
  sections.forEach( function(section) {
    sectionsArr.push(section.offsetTop)
  });
}


// НАЧАЛО БЛОКА для отображения карточек
//функция для формирования (загрузки) массива с карточками
var loadData = function () {
  var arrayWithCards = [];
  for (var i = 3; i <= 8; i++) {
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

var renderCard = function(k){
  var newCard = cardTemplate.cloneNode(true);
  var newCardTitle = newCard.querySelector('.card__title');
  newCardTitle.textContent = cards[k].title;
  var newCardText = newCard.querySelector('.card__text');
  newCardText.textContent = cards[k].text;
  blockForCard.appendChild(newCard);
}

var text = document.querySelector('#text');
var pages = document.querySelector('#pages');
var needToRender = true;
var totalClicks = cards.length / 2;
var numberOfClick = 0;
var numberOfCard = 0;

btn.addEventListener('click', function() {

  numberOfClick = numberOfClick + 1;

  if (numberOfClick <= totalClicks) {
    renderCard(numberOfCard);
    renderCard(numberOfCard + 1);
    numberOfCard = numberOfCard + 2;
    pages.textContent = numberOfCard + 2 + ' из 8';

    if (numberOfClick === totalClicks) {
      text.textContent = 'Скрыть';
    }
  } else if (numberOfClick > totalClicks) {
    addedCards = document.querySelectorAll('.sub-section__part--added');
    addedCards.forEach(function (card) {
      card.remove();
    });

    numberOfClick = 0;
    numberOfCard = 0
  }
  updatePositions();
});


// КОНЕЦ БЛОКА для отображения карточек

// НАЧАЛО БЛОКА для подсветки разделов
updatePositions();

var links = document.querySelectorAll(".left-nav-list__link");
var setLinkActive = function(linkNumberToActive) {
  for (var i = 0; i <= links.length - 1 ; i++ ) {
    if (i == linkNumberToActive) {
      links[i].classList.add('left-nav-list__link--active');
    } else {
      links[i].classList.remove('left-nav-list__link--active');
    }
  }
}

for (var i = 0; i < links.length ; i++ ) {
  links[i].addEventListener('click', function () {
    window.onscroll();
  });
}

window.onscroll = function() {
  var pos = window.pageYOffset;
  for (i = 0; i <= links.length - 1; i++ ) {
    if (i < links.length - 1) {

      if ((pos >= sectionsArr[i]) && (pos < sectionsArr[i + 1])) {
        setLinkActive(i);
      }
    } else if ( i = links.length - 1) {
      if (pos >= sectionsArr[i]) {
        setLinkActive(i);
      }
    }
  }
}

// КОНЕЦ БЛОКА для подсветки разделов
