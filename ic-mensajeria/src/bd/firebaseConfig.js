export const firebaseConfig = {
    

  <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.15.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCJgW3aeiyYYuHT0MW5MKDnJbpJyR1l0SQ",
    authDomain: "database-mesajeria.firebaseapp.com",
    databaseURL: "https://database-mesajeria.firebaseio.com",
    projectId: "database-mesajeria",
    storageBucket: "database-mesajeria.appspot.com",
    messagingSenderId: "475941196312",
    appId: "1:475941196312:web:f6b66338436953f413a96d",
    measurementId: "G-JNX8KZQRDF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
}