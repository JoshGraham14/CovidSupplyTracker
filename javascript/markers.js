/* Basic addMarker function that will add a marker to the map

    Parameters:
        lng: longitude of marker
        lat: latitude of marker

*/

function addMarker(lng, lat){
    var marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
};

// Queens university marker
addMarker(-76.4951, 44.2253);