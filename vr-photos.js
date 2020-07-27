window.addEventListener('load', onVrViewLoad);

function onVrViewLoad() {
  // Selector '#vrview' finds element with id 'vrview'.
  var vrView = new VRView.Player('#vrview', {
    image: '//www.evms.edu/media/training/student-parking-garage.jpg',
    is_stereo: true
  });
}
