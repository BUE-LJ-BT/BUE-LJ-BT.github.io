﻿var cacheName = 'v:static';

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll([
                'index.html',
                'About.html',
                'images/Buerkert_Logo.png',
                'StyleSheet.css',
                'Page1Logic.js',
                'Bluetooth_Transfer_Protobuf.js',
                'protobuf/protobuf.js',
                'libaries/qr-scanner/qr-scanner-worker.min.js',
                'Qr-Scanner/Page1_QRScanner.js',
                'Qr-Scanner/qr-scanner.min.js'
            ]).then(function (cache) {
                self.skipWaiting();
            });
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {      // Versucht Antwort vom cache zu erhalten
            if (response) {
                return response;                                // Gibt Antwort zurück
            }
            return fetch(e.request);                            // Gibt die Anfrage zurück
        })
    );
});


/*let deferredPrompt;
//const A2HButton = document.getElementById('Add_to_Homescreen_Button');
self.addEventListener('beforinstallprompt', e => {
    e.preventDefault();
    deferredPrompt = e;
    A2HButton.hidden = false;
    console.log(e.request.url);
    e.prompt();
    deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
});*/