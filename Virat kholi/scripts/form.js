const firebaseConfig = {
    apiKey: "AIzaSyDvppwvAWrTQdykJUpTfYodUsDa6aUbx3U",
    authDomain: "covid-555ea.firebaseapp.com",
    databaseURL: "https://covid-555ea-default-rtdb.firebaseio.com",
    projectId: "covid-555ea",
    storageBucket: "covid-555ea.appspot.com",
    messagingSenderId: "221869839904",
    appId: "1:221869839904:web:43799c347bb422ff578e45"
  };
  firebase.initializeApp(firebaseConfig);
  var UserInputsRef=firebase.database().ref('UserInputs')

function form(e){
   e.preventDefault()
    var v1=document.getElementById("name").value;
    var v2=document.getElementById("pro").value;
    var v3=document.getElementById("ph").value;
    var v4=document.getElementById("email").value;
console.log(v1+v2+v3+v4)
saveMessages(v1,v2,v3,v4)
}
function saveMessages(v1,v2,v3,v4){
    var newuserInputsRef = UserInputsRef.push();
    newuserInputsRef.set({
     name:v1,
     profession:v2,
     ph:v3,
     email:v4, 
    })
    alert("Thank you, find the list of centers nearby!  ")
}
document.getElementById("submitform").addEventListener("submit",form)