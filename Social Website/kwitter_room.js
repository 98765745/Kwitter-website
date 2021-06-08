
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB9m_olgX_vynkhqrt00_RjhqoQww_JBww",
      authDomain: "kwitter-93bbe.firebaseapp.com",
      projectId: "kwitter-93bbe",
      storageBucket: "kwitter-93bbe.appspot.com",
      messagingSenderId: "955635585328",
      appId: "1:955635585328:web:effbeb5d29869bd7fab8f5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "|";
    
    function addRoom()
    {
          room_name = document.getElementById("room_name").nodeValue;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" oncliick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

      });
});

}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}