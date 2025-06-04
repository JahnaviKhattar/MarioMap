function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 34.66767774804736,
			lng: 135.43076145097373,
		},
		zoom: 18,
		mapId: '54d898065fbb16eb5e0acb29',
		mapTypeControl: false,
		fullscreenControl: false,
		streetViewControl: false,
	});
	const markers = [
		[
			"Yoshi's House",
			34.66801309631253, 
            135.42939590333884,
			'yoshi_house.svg',
			38,
			31,
		],
		[
			'You Are Here',
			34.66872142447763, 
            135.43003858058887,
			'pointer.svg',
			30,47.8,
		],
		[
			'Ghost House',
			34.66770234576098, 
            135.42982970708476,
			'ghosthouse.svg',
			40,48,
		],
		[
            'Castle', 
            34.668093661080064, 
            135.43048740953824, 
            'castle.svg', 
            40, 53
        ],
		[
            'Warp Pipe', 
            34.66739738878135, 
            135.43225049775214, 
            'pipe.svg', 
            38, 42.5
        ],
		[
            'Star World',
            34.66733404730159, 
            135.4299976311154, 
             'star.svg', 
             38, 38
        ],
		[
			'Donut Plains',
			34.66727650051941,
            135.43086523860723,
			'hill_with_eyes.svg',
			50,60.7,
		],
		[
			'Donut Plains',
			34.66761027129963, 
            135.43184479545283,
			'hill_with_eyes.svg',
			50,60.7,
		],
		[
			'Donut Plains',
			34.6683781779677,
			135.43217016043528,
			'hill_with_eyes.svg',
			50,60.7,
		],
	];

	for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];

		const marker = new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon: {
				url: currMarker[3],
				scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
			},
			animation: google.maps.Animation.DROP,
		});

		const infowindow = new google.maps.InfoWindow({
			content: currMarker[0],
		});

		marker.addListener('click', () => {
			infowindow.open(map, marker);
		});
	}

}

