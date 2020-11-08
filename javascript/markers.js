/* Basic addMarker function that will add a marker to the map

    Parameters:
        lng: longitude of marker
        lat: latitude of marker

*/

function addMarker(lng, lat, title, contents){
    // if there is only a title passed to the function, gives a default response
    if (contents === undefined){
        contents = "No information available";
    };

    // creates a new pop-up to be linked with marker
    var pop = new mapboxgl.Popup({offset: 25, maxWidth: 300}).setHTML("<h1>"+title+"</h1>"+contents);
    // creates marker and adds it to the map
    var marker = new mapboxgl.Marker().setPopup(pop).setLngLat([lng, lat]).addTo(map);
    return marker;
};

// Creates a default marker at Queen's campus
var queensu = addMarker(-76.4951, 44.2253, "Queen's University", "Founded god knows when");