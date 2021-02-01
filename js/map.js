//buat icon ambulan
var ambulanceIcon= L.icon({
    iconUrl: 'image/ambulance_merah.png',

    iconSize:     [50, 70], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

//longitude latitude Kota Surakarta
var mymap = L.map('mapid').setView([-7.5592087, 110.8013025], 15);

//ambil data dari database
fetch('https://rendi.great-site.net/get.php')
.then(res => res.json())
.then(data => {

//longitude latitude ambulan saat ini
var marker = L.marker([data[1].latitude, data[1].longitude], {icon: ambulanceIcon}).addTo(mymap);

})

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
}).addTo(mymap);