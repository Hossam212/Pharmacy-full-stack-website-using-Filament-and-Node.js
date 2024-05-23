export const displayMap = (location) => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoic2hhcmswMTAiLCJhIjoiY2xqbmJsamRtMGFnODNrcW1nc2Y3MmEwYSJ9.9AT5bFTv5aI4kqLI4mn8TQ';
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/shark010/cljnf22yj00f301r5hqwfa2h9',
    scrollZoom: false, // disable scroll zoom
  });

  const bounds = new mapboxgl.LngLatBounds();

  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker to map
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(location.coordinates)
    .addTo(map);

  // Create popup
  const popup = new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(location.coordinates)
    .setHTML(`<p>${location.description}</p>`);

  // Add popup to map
  popup.addTo(map);

  // Extend map bounds to include marker
  bounds.extend(location.coordinates);

  // Fit map to bounds
  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
