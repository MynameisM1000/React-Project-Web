/* global google */
import React from "react";

const GoogleMap = () => {
    const styles = {
        map: {
            height: '400px',
            width: "100%",
            filter: 'grayscale(100%) invert(95%) sepia(100%) hue-rotate(180deg) saturate(300%) brightness(50%)',
        }
    };

   
    (g => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(), u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, t => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => h = n(Error(p + " could not load.")); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a); })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)); })({ key: "YOUR_API_KEY", v: "weekly" });

        
let map;

async function initMap() {
        const position = { lat: 43.2357, lng: 76.9094 };
        const { Map } = await google.maps.importLibrary("maps");
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

        map = new Map(document.getElementById("map"), {
            zoom: 14,
            center: position,
            mapId: "DEMO_MAP_ID",
            disableDefaultUI: true, 
            keyboardShortcuts: false,
            gestureHandling: 'none', 
            fullscreenControl: false, 
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: false, 
        });

        const marker = new AdvancedMarkerElement({
            map: map,
            position: position,
            title: "Our Office",
        });
        const infoWindow = new google.maps.InfoWindow({
            content: "Our Office",
        });

        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    }

    initMap();


    return (<div id="map" style={styles.map}></div>)

    
};

export default GoogleMap;