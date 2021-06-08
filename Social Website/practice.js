var firebaseConfig = {
    apiKey: "AIzaSyB9m_olgX_vynkhqrt00_RjhqoQww_JBww",
    authDomain: "kwitter-93bbe.firebaseapp.com",
    databaseURL: "https://kwitter-93bbe-default-rtdb.firebaseio.com",
    projectId: "kwitter-93bbe",
    storageBucket: "kwitter-93bbe.appspot.com",
    messagingSenderId: "955635585328",
    appId: "1:955635585328:web:effbeb5d29869bd7fab8f5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name= document.getElementById("user_name").nodeValue;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    })
}