import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

const LeafletMap = () => {
    useEffect(() => {
        // Leaflet on Mobile Map
        const mobileMap = L.map('mobilemap').fitWorld();
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(mobileMap);

        // Accessible maps
        const accessibleMap = L.map('accessiblemap').setView([51.505, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(accessibleMap);
        const marker = L.marker([51.5, -0.09]).addTo(accessibleMap);
        const circle = L.circle([51.508, -0.10], {
            fillColor: '#467FFB',
            fillOpacity: 0.6,
            radius: 500
        }).addTo(accessibleMap);
        const polygon = L.polygon([
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047],
        ], {
            fillColor: '#467FFB',
            fillOpacity: 0.6,
        }).addTo(accessibleMap);
        marker.bindPopup("<b>Hello!</b><br>I am a popup.").openPopup();
        circle.bindPopup("This is circle.");
        polygon.bindPopup("This is polygon.");

        // Markers, Circles and Polygons map
        const markersMap = L.map('markersmap').setView([50.4501, 30.5234], 4);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(markersMap);
        L.marker([50.4501, 30.5234], { alt: 'Kyiv' }).bindPopup('Kyiv, Ukraine is the birthplace of Leaflet!').addTo(markersMap);

        // Interactive Choropleth Map
        const interactiveMap = L.map('interactivemap').setView([37.8, -96], 4);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(interactiveMap);

        // Markers with Custom Icons
        const customIconsMap = L.map('customiconsmap').setView([51.5, -0.09], 13);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(customIconsMap);

        const LeafIcon = L.Icon.extend({
            options: {
                shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
                iconSize: [38, 95],
                shadowSize: [50, 64],
                iconAnchor: [22, 94],
                shadowAnchor: [4, 62],
                popupAnchor: [-3, -76]
            }
        });
        const greenIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png' });
        const redIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png' });
        const orangeIcon = new LeafIcon({ iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-orange.png' });

        L.marker([51.5, -0.09], { icon: greenIcon }).bindPopup('I am a green.').addTo(customIconsMap);
        L.marker([51.495, -0.083], { icon: redIcon }).bindPopup('I am a red.').addTo(customIconsMap);
        L.marker([51.49, -0.1], { icon: orangeIcon }).bindPopup('I am an orange.').addTo(customIconsMap);

        // Layer Groups and Layers Control
        const layersMap = L.map('layersmap', { scrollWheelZoom: false }).setView([-29.50, 145], 3.5);
        const basemaps = {
            StreetView: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap contributors' }),
            Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', { layers: 'TOPO-WMS' }),
            Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', { layers: 'OSM-Overlay-WMS' })
        };
        L.control.layers(basemaps).addTo(layersMap);
        basemaps.Topography.addTo(layersMap);

        const markers = [
            [-37.699450, 176.279420], [-27.643310, 153.305140], [-33.956330, 122.150270],
            [-34.962390, 117.391220], [-17.961210, 122.214820], [-16.505960, 151.751520],
            [-22.594400, 167.484440], [-37.977000, 177.057000], [-41.037600, 173.017000],
            [-37.670300, 176.212000]
        ];
        markers.forEach(coord => L.marker(coord).addTo(layersMap));
    }, []);

    return (
        <div>
            <Container fluid>
                <Row className=" m-1">
                    <Col xs={12}>
                        <h4 className="main-title">Leaflet Map</h4>
                        <ul className="app-line-breadcrumbs mb-3">
                            <li className="">
                                <a href="#" className="f-s-14 f-w-500">
                      <span>
                        <i className="ph-duotone  ph-map-pin-line f-s-16"></i> Map
                      </span>
                                </a>
                            </li>
                            <li className="active">
                                <a href="#" className="f-s-14 f-w-500">Leaflet Map</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Leaflet on Mobile Map</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="w-100 h-280" id="mobilemap"></div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Accessible maps</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="w-100 h-280" id="markersmap"></div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div className="row">
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Markers, Circles and Polygons</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="w-100 h-280" id="accessiblemap"></div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Interactive Choropleth Map</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="w-100 h-280" id="interactivemap"></div>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
                <div className="row">
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Markers With Custom Icons</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="w-100 h-280" id="customiconsmap"></div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg={6}>
                        <Card>
                            <CardHeader>
                                <h5>Layer Groups and Layers Control</h5>
                            </CardHeader>
                            <CardBody>
                                <div className="w-100 h-280" id="layersmap"></div>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </Container>
        </div>
    );
};

export default LeafletMap;