let map;

const coords = [
    [59.94554327989287, 30.38935262114668],
    [59.91142323563909, 30.50024587065841],
    [59.88693161784606, 30.319658102103713],
    [59.97033574821672, 30.315194906302924],
];

function setMarkers(map) {
    let markerIcon = {
        url: './img/icons/marker.png',
        // This marker is 46 pixels wide by 57 pixels high.
        size: new google.maps.Size(46, 57),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };

    for (let i = 0; i < coords.length; i++) {
        let point = coords[i];
        let marker = new google.maps.Marker({
            position: {lat: parseFloat(point[1]), lng: parseFloat(point[2])},
            map: map,
            icon: markerIcon,
        });
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 59.939095, lng: 30.315868 },
        zoom: 12,
        disableDefaultUI: true,
    });

    setMarkers(map);
}