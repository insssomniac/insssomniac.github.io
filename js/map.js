let myMap;

const init = () => {
    myMap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 7,
    });
}

ymaps.ready(init);