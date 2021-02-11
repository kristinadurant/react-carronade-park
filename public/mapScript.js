
mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc3RpbmE5OTAiLCJhIjoiY2trem42OWN4MmtjaTJwcW1qc2JtczlwMSJ9.zP-lGD7zuyQOgs-b-Bwz6A';



var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [-83.60881, 41.54275],
zoom: 15
});

// var marker = new mapboxgl.Marker()
// .setLngLat([41.54275, -83.60881])
// .addTo(map);
var marker = new mapboxgl.Marker()
.setLngLat([-83.60881, 41.54275])
.addTo(map);