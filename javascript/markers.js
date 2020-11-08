/* Basic addMarker function that will add a marker to the map

    Parameters:
        arr:
            index 0 = title of popup
            index 1 = longitude
            index 2 = latitude
            index 3 = boolean (stock)
        contents: contents of the popup i.e. relevant information to the popup

    returns marker type

*/

function addMarker(arr, contents){
    // if there is only a title passed to the function, gives a default response
    if (contents === undefined){
        contents = "No information available";
    };

    // creates a new pop-up to be linked with marker
    var pop = new mapboxgl.Popup({offset: 25, maxWidth: 300}).setHTML("<h1>"+arr[0]+"</h1>"+contents);
    // creates marker and adds it to the map
    var marker = new mapboxgl.Marker().setPopup(pop).setLngLat([arr[1], arr[2]]).addTo(map);
    return marker;
};

function main(){
    // disable double click zoom
    map.doubleClickZoom.disable();

    // listener
    map.on('dblclick', function(e){
        // testing
        var goodarr = ["bruh"];

        // Getting mouse coordinates
        var coords = e.lngLat;

        // toArray to pass into addMarker function
        var array = coords.toArray();
        // pushing to goodarr
        goodarr.push(array[0]);
        goodarr.push(array[1]);

        addMarker(goodarr, "boobs");
    });

    // Creates a default marker at Queen's campus
    var queenscoords = ["Queen's University", -76.4951, 44.2253];
    var queensu = addMarker(queenscoords, "Founded god knows when");
};

main();