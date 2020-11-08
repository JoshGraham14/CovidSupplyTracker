// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDreqE1k2gMgu9cL-oPDbKNUsbr189a7KI",
    authDomain: "covidsuppliestracker-294919.firebaseapp.com",
    databaseURL: "https://covidsuppliestracker-294919.firebaseio.com",
    projectId: "covidsuppliestracker-294919",
    storageBucket: "covidsuppliestracker-294919.appspot.com",
    messagingSenderId: "587340997182",
    appId: "1:587340997182:web:7749f0096f14ac74cc276f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//var firestore = firebase.firestore();
var db = firebase.firestore();

/* This function reads data from the database from a specific collection.
   That data is sent to the addMarker function (in markers.js) which populates 
   the markers on the grid.

    Parameters:
        coll (str): collection name (i.e. Masks, Toilet Paper, etc.)
*/
function readData(coll){
    db.collection(coll).get().then((querySnapshot) => {
        // initializes array that will be sent to addMarker
        var docInfo = [];
        var marker;
        var markers = [];
        // loops through each document in the collection
        querySnapshot.forEach((doc) => {
            // creates array of [store name, longitude, latitude, instock]
            docInfo = [doc.id, doc.data().Longitude, doc.data().Latitude, doc.data().Instock];
            // calls addmarker function to populate all the markers that are read from the data base
            marker = addMarker(docInfo);
            markers.push(marker);
        });
        return markers;
    });
    //return collectionInfo;
}

/* This function adds new data to the data base.

    Parameters:
        coll (str): collection name (i.e. Masks, Toilet Paper, etc.)
        document (str): document name (i.e. the name of the store)
        fields (array): array of fields associated with document
                         index 0 (float) = longitude
                         index 1 (float) = latitude
                         index 2 (boolean) = Instock
*/
function addData(coll, document, fields) {
    db.collection(coll).doc(document).set({
        Longitude: fields[0],
        Latitude: fields[1],
        Instock: fields[2]
    })
}
