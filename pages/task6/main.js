const slidesData = [
    {
        quote: "«Лучшую фразу из отзыва напишите в заголовке»",
        text: "«Вставьте отзыв целиком или часть отзыва клиента. Никогда не выдумывайте отзывы самостоятельно. Фальшивые отзывы всегда видно. Будьте честны. Опишите конечный результат, который получил человек после работы с вами. Что конкретно ему это дало. Можно описывать результат в цифрах, чтобы была конкретика»",
        author:"Иван Демидов",
        location: "Краснодар",
        image: "img/Ivan.png",        
    },
    {
        quote: "«Пример другой фразы из отзыва»",
        text: "«Описание для другого отзыва клиента. Это текст для демонстрации другого слайда. Здесь может быть любой текст, который подходит для демонстрации работы слайдера»",
        author:"Анна Иванова",
        location: "Москва",
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
    // Проверка данных параметра slideData? 
    const slide = document.createElement('div');
    slide.className = 'slide';
    slide.innerHTML = `
    <div class="slide-content">
        <div class = "slide-text">
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