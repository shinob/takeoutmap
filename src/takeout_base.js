var newmap = L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg', {
    attribution: '&copy; <a href="http://maps.gsi.go.jp/development/ichiran.html">地理院タイル</a> contributors',
    maxZoom: 18,
    minZoom: 12
});

var oldmap = L.tileLayer("https://map.blueomega.jp/osm_tiles/{z}/{x}/{y}.png", {
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

var initLatlng = {
	matsue : [35.468606, 133.059026],
	izumo : [35.360870, 132.756664], 
	yonago : [35.4281791, 133.331021],
};

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
    
    frm_select  = "<form name='shopSelector'><b>店舗選択</b><br /><select name='shop' onchange='moveToSelected()' style='width: 100%;'>";
    frm_select += "<option value=-1>店舗を選択して下さい。</option>"
    
    for (i=0; i<points.length; i++) {
        
        dsc  = "<div style='text-align: center;'>";
        dsc += "<a href='" + points[i][2] + "' target='_blank'>" + points[i][1] + "</a>";
        
        item = "<div style='float: left; text-align: center;' onclick='moveTo([" + points[i][0] + "], " + i + ")'>";
        item += points[i][1];
        
        frm_select += "<option value=" + i + ">" + points[i][1] + "</option>";
        
        if (points[i].length > 3) {
	        dsc += "<br /><br /><a href='tel:" + points[i][3] + "'>" + points[i][3] + "</a>";
	        //item += "<br />" + points[i][3];
        } else {
	        
        }
        
        dsc += "</div>";
        item += "</div>";
        
        m.push(L.marker(points[i][0]).addTo(mymap)
            .bindPopup(dsc)); //.openPopup());
        list += item;
    }
    
    frm_select += "</select></form>";
    
    document.getElementById("frm_select").innerHTML = frm_select;
    document.getElementById("list").innerHTML = list;
    document.getElementById("info").innerHTML = "登録店舗数 " + points.length + "店";

}

function moveTo(latlng, i) {
    //alert(latlng);
    mymap.setView(latlng, 17);
    m[i].openPopup();
}

function moveToSelected() {
	i = document.shopSelector.shop.selectedIndex - 1;
	//alert(i);
	moveTo(points[i][0], i);
}

function setCenter(latlng) {
    mymap.setView(latlng, init_zoom);
    m.setLatLng(latlng);
}

