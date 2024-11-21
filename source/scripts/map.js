/* global ymaps */

ymaps.ready(init);

function init() {
  const myMap = new ymaps.Map('map', {
    center: [59.938631, 30.323037],
    zoom: 15,
    controls: ['zoomControl']
  });

  const placemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: 'images/map-pin@1x.png',
    iconImageSize: [56, 52],
    iconImageOffset: [-15, -42]
  };

  const myPlacemark = new ymaps.Placemark([59.938631, 30.323037], {
    balloonContent: 'ул. Большая Конюшенная, д. 19/8<br><strong>Санкт-Петербург</strong>'
  }, placemarkOptions);

  myMap.geoObjects.add(myPlacemark);

  function updatePlacemarkSize() {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 768) { // Планшетный размер и выше
      myPlacemark.options.set({
        iconImageSize: [113, 106],
        iconImageOffset: [-56, -90]
      });
    } else {
      myPlacemark.options.set({
        iconImageSize: [56, 52],
        iconImageOffset: [-15, -42]
      });
    }
  }

  updatePlacemarkSize();

  window.addEventListener('resize', updatePlacemarkSize);
}
