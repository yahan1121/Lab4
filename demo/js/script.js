//Create a map object and specify the center lat/lon and zoom level
	var map = L.map('map').setView([30,-99], 4);

//Create a tile layer (basemap) object with a street map
  var streets = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

//Create a layer object with a map depicting the NWS daily maximum surface air temperature forecasts from the National Digital Forecast Database (NDFD) out to 3-4 days.
  var hightemp = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_dailymaxairtemp_offsets/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity:0.25
  }).addTo(map);

//Create a layer object with a map depicting the NWS 6-hr quantitative precipitation forecasts (QPF) from the National Digital Forecast Database (NDFD) ending at specified forecast projection hours out to 2-3 days.
  var precipitation = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_qpf6hrs_offsets/MapServer/WMSServer", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "NOAA",
		opacity:0.5
  }).addTo(map);

//Create a layer object with a map of experimental lightning strike density data from the NOAA/National Weather Service/NCEP's Ocean Prediction Center (OPC).
	var lighting = L.tileLayer.wms("http://nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", {
		layers: '1',
		format: 'image/png',
		transparent: true,
		attribution: "NOAA"
	}).addTo(map);

//Create an object with layers for each basemap.
	var baseLayers = {
	  "Streets": streets
	};

//Create a layer with all the three maps overlayed together.
	var overlays = {
	  "High Temp": hightemp,
	  "Precipitation": precipitation,
		"Lighting": lighting
	};

//Add the overlays to the street basemap.
	L.control.layers(baseLayers, overlays).addTo(map);
