window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    image: './cast-lab.jpg',
    is_vr_off: true,
    width: 1000,
    height: 900,
    default_yaw: 360,
    is_yaw_only: true
  });
}


renderer.setSize( window.innerWidth/2, window.innerHeight/2 )


