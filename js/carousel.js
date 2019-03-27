

        var width = 130; // ширина слайда
        var count = 1; // кол-во слайдов при прокрутке
    
        var carousel = document.getElementById('carousel'); // Враппер
        var list = carousel.querySelector('ul'); // Список
        var listElems = carousel.querySelectorAll('li'); // Элементы списка
    
        var position = 0; // текущий сдвиг влево
    
        carousel.querySelector('.prev').onclick = function() { // шаг на кадр назад при клике
        position = Math.min(position + width * count, 0)
        list.style.marginLeft = position + 'px';
        };

        carousel.querySelector('.next').onclick = function() { // шаг на кадр вперед при клике
        position = position - width * count;
        list.style.marginLeft = position + 'px';
        if(position <= -3910){
         position = 0;
         list.style.marginLeft = position + 'px';
        }
        };

