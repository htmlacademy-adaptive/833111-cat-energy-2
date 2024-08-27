<<<<<<< HEAD
/* global ymaps */
=======
>>>>>>> module2-task1
ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map('map', {
    center: [59.938631, 30.323037],
    zoom: 15,
    controls: ['zoomControl']
  });

  const myPlacemark = new ymaps.Placemark([59.938631, 30.323037], {
    balloonContent: 'ул. Большая Конюшенная, д. 19/8<br><strong>Санкт-Петербург</strong>'
  }, {

    iconLayout: 'default#image',
    iconImageHref: 'images/map-pin@1x.png',
    iconImageSize: [57, 53],
    iconImageOffset: [-15, -42]
  });

  myMap.geoObjects.add(myPlacemark);
}
