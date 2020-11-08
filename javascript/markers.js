/* Basic addMarker function that will add a marker to the map

    Parameters:
        arr:
            index 0 = title of popup
            index 1 = longitude
            index 2 = latitude
            index 3 = boolean (stock)

    returns marker type

*/
var currentItem;
var locations = [];
function addMarker(arr){
    var stock = "";
    var pincolor;
    // sets a string value for if the item is in stock, to print as a subheader on the marker
    if(arr[3]) {
        stock = "in stock";
        pincolor = "#1AD530";
    } else {
        stock = "out of stock";
        pincolor = "#FF0000";
    }

    // creates a new pop-up to be linked with marker
    var pop = new mapboxgl.Popup({offset: 25, maxWidth: 300}).setHTML("<h3>"+arr[0]+"</h3>" + stock);
    // creates marker and adds it to the map
    var marker = new mapboxgl.Marker({color: pincolor}).setPopup(pop).setLngLat([arr[1], arr[2]]).addTo(map);

    locations.push(marker);
    return marker;
}

// Event listeners

// mask event listener
function maskListener(){
    // clears all other markers
    clearLocations();
    console.log("event listener active");
    // populates the map with mask markers
    currentItem = "Masks";
    readData("Masks");
}

// toilet paper event listener
function tpListener(){
    // clears all other markers
    clearLocations();
    console.log("event listener active");
    // populates the map with toilet paper markers
    currentItem = "Toilet Paper";
    readData("Toilet Paper");
}

// hand sanitizer event listener
function handSanListener(){
    // clears all other markers
    clearLocations();
    console.log("event listener active");
    // populates the map with hand sanitizer markers
    currentItem = "Hand Sanitizer";
    readData("Hand Sanitizer");
}

// glove listener
function glovesListener(){
    // clears all other markers
    clearLocations();
    console.log("event listener active");
    // populates the map with hand sanitizer markers
    currentItem = "Gloves"
    readData("Gloves");
}

function addListener(){
    console.log("event listener active");
    // test array
    var userString = "TEST";
    var stock = false;
    var  fields = [];

    // One time listener
    map.once('click', function(e){
        // gets mouse coordinates and adds them to array
        var mousecoords = e.lngLat;
        var coordarray = mousecoords.toArray();
<<<<<<< HEAD
        testarr.push(coordarray[0]);
        testarr.push(coordarray[1]);
        testarr.push(false);
        console.log(testarr);
        addMarker(testarr);
=======
        fields.push(coordarray[0]);
        fields.push(coordarray[1]);
        fields.push(stock);

        addMarker(fields);
        readData(currentItem);
        addData(currentItem, userString, fields)
>>>>>>> a48b6cb90365f623860f3bfe7c96cc5aa7c37df1
    });
}

// clear locations function to remove pins when a new item is searched
function clearLocations(){
    // for loop to iterate over locations and remove each pin
    var i;
    for (i = 0; i < locations.length; i++){
        locations[i].remove();
    }
}