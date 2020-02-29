let map, marker, infowindow, geocoder, addresBuilding, addresBuildingText;

let locLink = document.querySelectorAll('.mapTarget')

locLink.forEach((address) => {
    address.addEventListener('click', (e) => {
        addresBuildingText = e.target.textContent
        addresBuildingTextFromDataAdress = address.getAttribute('data-addres')
        geocode(addresBuildingText)
    })
})


function initMap() {
    addresBuilding = { lat: 40.648583, lng: -73.873768 };
    let latc = addresBuilding.lat - 0.02
    let lngc = addresBuilding.lng + 0.02
    let centerMap = { lat: latc, lng: lngc }

    map = new google.maps.Map(document.getElementById('map'), {
        center: centerMap,
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl: false,
        // gestureHandling: 'greedy',
    });
    $.getJSON("./js/mstyle.json", function (data) {
        map.setOptions({ styles: data });
    });

    marker = new google.maps.Marker({
        position: addresBuilding,
        map: map,
        icon: {
            url: 'img/label.png',
            scaledSize: new google.maps.Size(100, 100)
        },
        animation: google.maps.Animation.DROP
    });

    geocoder = new google.maps.Geocoder();
}

function geocode(address) {
    geocoder.geocode({ 'address': address }, function (results, status) {

        if (status == 'OK') {
            let latLng = results[0].geometry.location
            let mlat = latLng.lat() - 0.02;
            let mlng = latLng.lng() + 0.02;
            let marcenter = { lat: mlat, lng: mlng }
            map.setCenter(marcenter);
            marker.setPosition(latLng)
            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(() => {
                marker.setAnimation(null)
            }, 2000)

            marker.setTitle(`${address}`)
        } else {
            geocode(addresBuildingTextFromDataAdress)
        }
    });
}