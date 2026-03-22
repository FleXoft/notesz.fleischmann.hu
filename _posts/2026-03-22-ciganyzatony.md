---
layout:   post_2026
title:    Mohácsi Cigány Zátony
author:   flex
category: 2026
tags:     [Mohács, kirándulás]
comments: false
---

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

{% include hudate.html %}

{% include prev_next_mini.html %}

"A Duna közelsége különleges természeti kincseket rejt, amelyek közül az egyik legizgalmasabb a Cigány-zátony. Ez a homokos zátony igazi rejtett gyöngyszem, amely ideális helyszínt kínál a természet szerelmeseinek és a nyugodt kikapcsolódásra vágyóknak." [^1]

<div id="map-wrap" class="shadow" style="margin-bottom: 15px; margin-top: 15px;">
	<div id="map" style="width:auto; height:850px;"></div>
</div>

<script type='text/javascript' src='https://maps.googleapis.com/maps/api/js?key=AIzaSyAubcKvynd2lNrvNQHlTt6b7Q8OBxDzNOg'></script>

<script type="text/javascript"
	src="js/loadgpx.js">
</script>

<!-- https://github.com/peplin/gpxviewer -->

<script type="text/javascript">

	function loadGPXFileIntoGoogleMap( map, filename, color, opacity ) {
	$.ajax( { url: filename, dataType: "xml", success: function( data ) {
		var parser = new GPXParser( data, map );	// 
		parser.setTrackColour( color );     		// Set the track line colour
		parser.setTrackWidth( 5 );          		// Set the track line width
		parser.setTrackOpacity( opacity );			// Set the track line opacity
		parser.setMinTrackPointDelta( 0.001 );		// Set the minimum distance between track points
		parser.centerAndZoom( data );				// 
		parser.addTrackpointsToMap();         		// Add the trackpoints
		parser.addRoutepointsToMap();         		// Add the routepoints
		parser.addWaypointsToMap();           		// Add the waypoints
		} } );
	}

	$( document ).ready( function() {
		var infowindow = new google.maps.InfoWindow();

		var map = new google.maps.Map( document.getElementById( 'map' ), {
			zoom     : 3.5,
			center   : new google.maps.LatLng( 50, -33 ),
			mapTypeId: google.maps.MapTypeId.ROADMAP
		} );
		
		loadGPXFileIntoGoogleMap( map, "gpx/20260322_GPSKitData.gpx", "#0000ff", .4 ); // blue

	} );

</script>

<section style="margin-bottom: 0px;">
<div class="justified-gallery">
    <div class="gallery-item shadow"><img src="photos/20260322_ciganyzatony/HipstamaticPhoto-795859858.391968.png" data-full="photos/20260322_ciganyzatony/HipstamaticPhoto-795859858.391968_ORIGINAL.png" alt="" loading="lazy"></div>
    <div class="gallery-item shadow"><img src="photos/20260322_ciganyzatony/IMG_1134.png" data-full="photos/20260322_ciganyzatony/IMG_1134_ORIGINAL.png" alt="" loading="lazy"></div>
    <div class="gallery-item shadow"><img src="photos/20260322_ciganyzatony/HipstamaticPhoto-795859917.857165.png" data-full="photos/20260322_ciganyzatony/HipstamaticPhoto-795859917.857165_ORIGINAL.png" alt="" loading="lazy"></div>
    <div class="gallery-item shadow"><img src="photos/20260322_ciganyzatony/HipstamaticPhoto-795860891.849307.png" data-full="photos/20260322_ciganyzatony/HipstamaticPhoto-795860891.849307_ORIGINAL.png" alt="" loading="lazy"></div>
    <div class="gallery-item shadow"><img src="photos/20260322_ciganyzatony/HipstamaticPhoto-795859866.048054.png" data-full="photos/20260322_ciganyzatony/HipstamaticPhoto-795859866.048054_ORIGINAL.png" alt="" loading="lazy"></div>
    <div class="gallery-item shadow"><img src="photos/20260322_ciganyzatony/EUGJE6809.png" data-full="photos/20260322_ciganyzatony/EUGJE6809_ORIGINAL.png" alt="" loading="lazy"></div>
</div>
</section>

[^1]: [A Duna formálta rejtett paradicsom – Fedezd fel a mohácsi Cigány-zátonyt](https://csodalatosmagyarorszag.hu/hirek/itthon/a-duna-formalta-rejtett-paradicsom-fedezd-fel-a-mohacsi-cigany-zatonyt/)