importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.23.0/firebase-messaging-compat.js")

const firebaseConfig = {
    apiKey: "AIzaSyAOElTgeP-IB5CKhhpkl7Z_kVugUl4HZ70",
    authDomain: "dulce-delicia-b3afa.firebaseapp.com",
    projectId: "dulce-delicia-b3afa",
    storageBucket: "dulce-delicia-b3afa.appspot.com",
    messagingSenderId: "496979070853",
    appId: "1:496979070853:web:010ee91c8aa1af7edafeec",
    measurementId: "G-4G406Y0GQ5"
  };

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

messaging.onBackgroundMessage(payload => {
    console.log("recibiste un mensaje mientras estabas ausente");

    // previo a mostrar notificacion 
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/pwa-192x192.png"
    }

    return self.registration.showNotification(
        notificationTitle, 
        notificationOptions
    );
})