/* Basic addMarker function that will add a marker to the map

    Parameters:
        arr:
            index 0 = title of popup
            index 1 = longitude
            index 2 = latitude
            index 3 = boolean (stock)

    returns marker type

*/

function addMarker(arr){
    var stock = "";
    // sets a string value for if the item is in stock, to print as a subheader on the marker
    if(arr[3])
        stock = "in stock";
    else
        stock = "out of stock";
    
    // creates a new pop-up to be linked with marker
    var pop = new mapboxgl.Popup({offset: 25, maxWidth: 300}).setHTML("<h3>"+arr[0]+"</h3>" + stock);
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