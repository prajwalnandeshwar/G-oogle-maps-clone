mapboxgl.accessToken = 'pk.eyJ1IjoicHJhandhbG5hbmRlc2h3YXIiLCJhIjoiY2tvdGdvZmZ6MGI0ZzJxcnhiYmM1NTZpdCJ9.uAi9cn6rqOoR3BLAylY2uQ';
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy:true
})

function successLocation(position){
    setupMap([position.coords.longitude,position.coords.latitude])
}
function errorLocation() {
    setupMap([-2.24,53.48])
}

function setupMap(center){
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: center,
  zoom:15
});

const nav = new mapboxgl.NavigationControl();
map.addControl(nav)


var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
   
  });
  
  
  
  map.addControl(directions, 'top-left');



}