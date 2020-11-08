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
    //return marker;
};

function main(){
    // Creates a default marker at Queen's campus
    var queenscoords = ["Queen's University", -76.4951, 44.2253];
    var queensu = addMarker(queenscoords, "Our sweet little home");
};

main();

function maskListener(){
    console.log("event listener active");
    var testarr = ["bruh"];

    // One time listener
    map.once('click', function(e){
        var mousecoords = e.lngLat;
        var coordarray = mousecoords.toArray();
        testarr.push(coordarray[0]);
        testarr.push(coordarray[1]);

        addMarker(testarr, "content");
    });
};