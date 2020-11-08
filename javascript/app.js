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

// function readData(coll){
//     var collectionInfo = [];
//     db.collection(coll).get().then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             console.log(doc.id + "  " + doc.data().Longitude + "  " + doc.data().Latitude + "  " + doc.data().Instock);
//         });
//     });
//     return collectionInfo;
// }

function addData(coll, document, fields) {
    db.collection(coll).doc(document).set({
        Longitude: fields[0],
        Latitude: fields[1],
        Instock: fields[2]
    })
}

//info = readData("Masks");
//console.log(info);

// for (let i = 0; i < info.length; i++){
//     console.log("Store: " + info[i][0] + "\tLongitude: " + info[i][1] + "\tLatitude: " + info[i][2] + "\tInstock: " + info[i][3]);
// }

//addData("Masks", "Shoppers Drug Mart", [-76.493627, 44.23394, true]);