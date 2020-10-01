// templating
var elements = [
    linksID = ['https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/anatomy-lab.html', 
    'anatomyLabCard', 
    'artTherapy2122Card', 
    'lewis2122', 
    'cancerCenterCard',
    'proteomicsCard', 
    'cytometryCard'],
    locations = ['Anatomy Lab (Lewis 2073)', 'Anatomy Lab (Lewis 2073) - Video', 'Art Therapy Studio, Lewis 2122', 'Art Therapy Studio, Lewis 2122 - 360 photo', 'Biomedical Sciences Cancer Center - Video', 'Biomedical Sciences Proteomics - Video', 'Brickell Medical Sciences Library - Video'],
    images = ['maps_directions_parking/virtual_tour/assets/thumbnails/anatomy-lab-1.jpg',         'maps_directions_parking/virtual_tour/assets/thumbnails/anatomy-lab-1.jpg',
        'maps_directions_parking/virtual_tour/assets/thumbnails/lewis-room-2122.jpg', 
        'maps_directions_parking/virtual_tour/assets/thumbnails/lewis-room-2122.jpg', 'maps_directions_parking/virtual_tour/assets/thumbnails/leroy-t-canoles-jr-cancer-research-center-labs.jpg', 'maps_directions_parking/virtual_tour/assets/thumbnails/proteomics-core-facility.jpg', 'maps_directions_parking/virtual_tour/assets/thumbnails/leroy-t-canoles-jr-cancer-research-center-labs.jpg', 'maps_directions_parking/virtual_tour/assets/thumbnails/proteomics-core-facility.jpg'
    ]
];

createItems();

// init Isotope
var $container = $('#container').isotope({
    itemSelector: '.item'
});

var $output = $('#output');

// filter with selects and checkboxes
var $checkboxes = $('#form-ui input');

$checkboxes.change(function () {
    // map input values to an array
    var inclusives = [];
    // inclusive filters from checkboxes
    $checkboxes.each(function (i, elem) {
        // if checkbox, use value if checked
        if (elem.checked) {
            inclusives.push(elem.value);
        }
        //console.log (inclusives);
    });

    // combine inclusive filters
    var filterValue = inclusives.length ? inclusives.join(', ') : '*';
    console.log(filterValue);
    $output.text(filterValue);
    $container.isotope({
        filter: filterValue
    })
});

function createItems() {
    var $items;
    // loop over colors, locations, images
    // create one item for each
    for (var i = 2, len = elements.length; i < len; i++) {
        for (var j = 0, len2 = elements[j].length; j < len2; j++) {
            //var link = links[i];
            // var location = locations[j];
            // var image = images[k];
            var $item = $('<div />', {
                'class': 'item virtual-tours__content__card ' + locations[j] + ' id='+linksID[j]
            });
            $item.append('<a href="'+linksID[j]+'" target="_blank"><figure class="virtual-tours__content__card__thumbnail"><img src ="https://www.evms.edu/' + images[j] + '" /></figure></a>' + '<p>' + locations[j] + '</p>' );
            // add to items
            $items = $items ? $items.add($item) : $item;
            // outer loop applies to outer array
        }
    }
    $items.appendTo($('#container'));
}