var newmap = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', {
    attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a> contributors',
    maxZoom: 18,
    minZoom: 12
});

var oldmap = L.tileLayer("http://map.blueomega.jp/osm_tiles/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    minZoom: 12
});

var baseMaps = {
    "航空写真" : newmap,
    "地　　図" : oldmap
};

var list = "";
var m = [];

var init_zoom = 14;

var mymap;
    
function create_takeout() {

	init_map();
    add_points();
    
}

function create_form() {
	
	init_map();
	m = L.marker([lat, lng]).addTo(mymap);
	
	function onMapClick(e) {
		//alert("You clicked the map at " + e.latlng);
		m.setLatLng(e.latlng);
		document.frm_add.latlng.value = e.latlng;
	}
	
	mymap.on('click', onMapClick);
	
}

function init_map() {
	
    mymap = L.map('mapid', {
        layers: [newmap]
    });

    L.control.layers(baseMaps).addTo(mymap);

    mymap.setView([lat, lng], init_zoom);
    
}

function add_points() {
	
    points = load_points();

    for (i=0; i<points.length; i++) {
        L.circle(points[i][0], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.4,
            radius: 10
        }).addTo(mymap);
    }
    
    for (i=0; i<points.length; i++) {
        m.push(L.marker(points[i][0]).addTo(mymap)
            .bindPopup("<a href='" + points[i][2] + "' target='_blank'>" + points[i][1] + "</a>")); //.openPopup());
        list += "<div style='float: left;' onclick='moveTo([" + points[i][0] + "], " + i + ")'>" + points[i][1] + "</div>";
    }
    
    document.getElementById("list").innerHTML = list;
    document.getElementById("info").innerHTML = "登録店舗数 " + points.length + "店";

}

function moveTo(latlng, i) {
    //alert(latlng);
    mymap.setView(latlng, 17);
    m[i].openPopup();
}


