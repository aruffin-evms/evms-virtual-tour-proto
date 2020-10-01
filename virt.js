// templating
var links = [ 'a', 'b', 'c', 'd', ];
var locations = [ 'Anatomy Lab (Lewis 2073)', 'Art Therapy Studio, Lewis 2122', 'Biomedical Sciences Cancer Center - Video','Biomedical Sciences Proteomics - Video', 'Brickell Medical Sciences Library - Video'  ];
var images = [ 'maps_directions_parking/virtual_tour/assets/thumbnails/anatomy-lab-1.jpg' , 'maps_directions_parking/virtual_tour/assets/thumbnails/lewis-room-2122.jpg',  'maps_directions_parking/virtual_tour/assets/thumbnails/leroy-t-canoles-jr-cancer-research-center-labs.jpg', 'maps_directions_parking/virtual_tour/assets/thumbnails/proteomics-core-facility.jpg'];
createItems();

// init Isotope
var $container = $('#container').isotope({
  itemSelector: '.item'
});

var $output = $('#output');

// filter with selects and checkboxes
var $checkboxes = $('#form-ui input');

$checkboxes.change( function() {
  // map input values to an array
  var inclusives = [];
  // inclusive filters from checkboxes
  $checkboxes.each( function( i, elem ) {
    // if checkbox, use value if checked
    if ( elem.checked ) {
      inclusives.push( elem.value );
    }
  });

  // combine inclusive filters
  var filterValue = inclusives.length ? inclusives.join(', ') : '*';

  $output.text( filterValue );
  $container.isotope({ filter: filterValue })
});


function createItems() {

  var $items;
  // loop over colors, locations, images
  // create one item for each
  for (  var i=0; i < links.length; i++ ) {
    for ( var j=0; j < locations.length; j++ ) {
     for ( var k=0; k < images.length; k++ ) {
        var color = links[i];
        var location = locations[j];
       var image = images[k];
        var $item = $('<div />', {
          'class': 'item red' +  ' ' + location
        });
        $item.append('<img src ="https://www.evms.edu/'+ image +'" />' + '<p>' + location + '</p>');
        // add to items
        $items = $items ? $items.add( $item ) : $item;
      }
    } 
  }

  $items.appendTo( $('#container') );

}
