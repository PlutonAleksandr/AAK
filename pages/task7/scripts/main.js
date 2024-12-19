document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.getElementById('burger-menu');
  const menu = document.querySelector('.menu');

  burgerMenu.addEventListener('click', function() {
      menu.classList.toggle('show');
      burgerMenu.classList.toggle('open');
  });
});

// слайдер
const slidesData = [
  {
      quote: "«Остался доволен программой»",
      text: "Я рад, что обратиться именно в эту компанию. Ребята быстро отреагировали на мой заказ. Разработали проект, согласовали и приступили к созданию. На протяжении всего процесса поддерживали связь выслушивали мои пожеланию и вносили корректировки. Время заняло 1 неделю на создание и доведение программы до полностью работающего варианта. ",
      author:"Иван Прохоров",
      location: "Оренбург",
      image: "img/Ivan.png",        
  },
  {
      quote: "«Отличное, простое и функциональное ПО»",
      text: "Программа работает четко, нигде не подводит. Я легко научилась ею пользоваться (есть подробная инструкция) и работаю в свое удовольствие. Спасибо  AAK Corporation за разработку и за постоянное совершенствование программы.",
      author:"Варвара Иванова",
      location: "Новотроицк",
      image: "img/Anna.png",
  },
]
// console.log(slidesData[0].location);

const sliderContainer = document.getElementById("sliderContainer");
let currentSlideIndex = 0;


document.getElementById('prevButton').addEventListener('click', prevSlide);
document.getElementById('nextButton').addEventListener('click', nextSlide);


function prevSlide() {
  if (currentSlideIndex > 0) {
      currentSlideIndex = currentSlideIndex - 1;
      // currentSlideIndex--;
  }
  showSlide(currentSlideIndex);
}

function nextSlide() {
  if (currentSlideIndex < slidesData.length -1) {
      currentSlideIndex = currentSlideIndex + 1;
      // currentSlideIndex++;
  }
  showSlide(currentSlideIndex);
}

function createSlide(slideData) {
  const slide = document.createElement('div');
  slide.className = 'slide';
  slide.innerHTML = `
    <div class="slide-content">
      <div class="slide-text">
        <h3 class="slide-quote">${slideData.quote}</h3>
        <p class="slide-text">${slideData.text}</p>
        <a href="#" class="slide-link">Читать отзыв полностью</a>
        <h4 class="slide-author">${slideData.author}</h4>
        <p class="slide-location">${slideData.location}</p>
      </div>
      <div class="slide-img">
        <img src="${slideData.image}" alt="${slideData.author}">
      </div>
    </div>
  `;
  return slide;
}


for(let elem of slidesData){
  const slideElement = createSlide(elem);
  sliderContainer.appendChild(slideElement);
}

function showSlide(index){
  const slides = document.querySelectorAll('.slide');
  // console.log(slides);
  for(let i = 0; i < slides.length; i++){
      if(i === index){
          slides[i].classList.add('active-slide');
      }else{
              slides[i].classList.remove('active-slide');
          }
         
      }
  }
showSlide(currentSlideIndex);