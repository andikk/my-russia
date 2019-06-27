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

var renderCard = function(k){
  var newCard = cardTemplate.cloneNode(true);
  var newCardTitle = newCard.querySelector('.card__title');
  newCardTitle.textContent = cards[k-1].title;
  var newCardText = newCard.querySelector('.card__text');
  newCardText.textContent = cards[k-1].text;
  blockForCard.appendChild(newCard);
}

var text = document.querySelector('#text');
var pages = document.querySelector('#pages');
var k = 2;
var needToRender = true;
btn.addEventListener('click', function() {
  k = k + 1;
  switch (k) {
    case 3: // превое нажатие, показываем 4 карточки
      pages.textContent = '4 из 7';
      if (needToRender) {
        renderCard(k);
        renderCard(k + 1);
      } else {
        addedCards[0].style.display = 'block';
        addedCards[1].style.display = 'block';
      }
      break;
    case 4: // второе нажатие, показываем 6 карточек
      pages.textContent = '6 из 7';
      if (needToRender) {
        renderCard(k + 1);
        renderCard(k + 2);
      } else {
        addedCards[2].style.display = 'block';
        addedCards[3].style.display = 'block';
      }
      break;
    case 5: // третье нажатие, показываем 7 карточек
      pages.textContent = '7 из 7';
      text.textContent = 'Скрыть'
      if (needToRender) {
        renderCard(k + 2);
      } else {
        addedCards[4].style.display = 'block';
      }
      break;
  }

  // если нажали четвёртый раз, значит скрываем все карточки,
  // которые показали
  if (k > 5) {
    k = 2;
    needToRender = false;
    pages.textContent = '2 из 7';
    text.textContent = 'Посмотреть еще'
    addedCards = document.querySelectorAll('.sub-section__part--added');
    for (var n = 0; n < addedCards.length; n++ ) {
      addedCards[n].style.display = 'none';
    }

  }
});
// КОНЕЦ БЛОКА для отображения карточек

// НАЧАЛО БЛОКА для подсветки разделов
var links = document.querySelectorAll(".left-nav-list__link");
for (var i = 0; i <= links.length - 1; i++ ) {
  links[i].addEventListener('click', function () {
    window.onscroll();
  });
}

window.onscroll = function() {
  var scrolled = window.pageYOffset;

  if (scrolled >= 0 && scrolled < 1747) {
    links[0].classList.add('left-nav-list__link--active');
  } else {
    links[0].classList.remove('left-nav-list__link--active');
  }

  if (scrolled > 1740 && scrolled < 2531) {
    links[1].classList.add('left-nav-list__link--active');
  } else {
    links[1].classList.remove('left-nav-list__link--active');
  }

  if (scrolled >= 2531) {
    links[2].classList.add('left-nav-list__link--active');
  } else {
    links[2].classList.remove('left-nav-list__link--active');
  }
}
// КОНЕЦ БЛОКА для подсветки разделов
