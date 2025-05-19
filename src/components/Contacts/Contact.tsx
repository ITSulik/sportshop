import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function Contact() {
    useEffect(() => {
        const container = L.DomUtil.get("mapid");
        if (container != null) {
            (container as any)._leaflet_id = null;
        }

        const map = L.map("mapid").setView([-23.013104, -43.394365], 13);

        L.tileLayer(
            "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
            {
                maxZoom: 18,
                attribution:
                    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                id: "mapbox/streets-v11",
                tileSize: 512,
                zoomOffset: -1,
            },
        ).addTo(map);

        L.marker([-23.013104, -43.394365]).addTo(map).bindPopup("<b>Zay</b> eCommerce<br />Location.").openPopup();

        map.scrollWheelZoom.disable();
        map.touchZoom.disable();

        return () => {
            map.remove();
        };
    }, []);

    return (
        <div className="bg-white">
            <div className="bg-gray-100 px-5 py-10">
                <div className="mx-auto text-center">
                    <h1 className="mb-4 text-5xl font-light">Pagina de Contact</h1>
                    <p className="text-gray-700">
                        Vrei să afli mai multe sau ai nevoie de ajutor? Trimite-ne un mesaj și îți răspundem cu drag în
                        cel mai scurt timp!
                    </p>
                </div>
            </div>

            <div id="mapid" className="h-[400px] w-full" />
        </div>
    );
}

export default Contact;
