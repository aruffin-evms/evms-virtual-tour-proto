// templating
var elements = [
    linksID = ['https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/anatomy-lab.html',
        'anatomyLabCard',
        'artTherapy2122Card',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/lewis-2122.html',
        'cancerCenterCard',
        'proteomicsCard',
        'cytometryCard',
        'brickellLibraryCard',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/library-comp-lab.html',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/library-first-floor.html',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/library-comp-lab.html', //maybe not right but not right on original
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/cast-classroom.html',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/cast-lab.html',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/chkd-exterior.html',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/evms-courtyard.html',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/townebank-lawn.html',
        'townBankCard',
        'communityCenterCard',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/student-center-bookstore.html',
        'hofheimerHallCard',
        'jonesInstituteCard',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/lester-room.html',
        'artTherapy107Card',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/lester-107.html',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/lester-355.html',
        'lesterHallCard',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/lester-hall-lobby.html',
        'artTherapy411Card',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/lester-411.html',
        'lewisHallCard',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/roper-auditorium.html',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/lewis-3073.html',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/lewis-3078.html',
        'mccombsAuditoriumCard',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/mdl.html',
        'multiDiscLabCard',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/pa-admin-offices.html',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/sentara-exterior.html',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/student-parking.html',
        'studentParking',
        'https://www.evms.edu/maps_directions_parking/virtual_tour/vr-views/student-parking-garage.html',
        'waitzerHallCard'


    ],
    locations = ['Anatomy Lab (Lewis 2073)',
        'Anatomy Lab (Lewis 2073) - Video',
        'Art Therapy Studio, Lewis 2122',
        'Art Therapy Studio, Lewis 2122 - 360 photo',
        'Biomedical Sciences Cancer Center - Video',
        'Biomedical Sciences Proteomics - Video',
        'Biomedical Sciences Cytometry - Video',
        'Brickell Medical Sciences Library - Video',
        'Brickell Medical Sciences Library Computer Lab - 360 photo',
        'Brickell Medical Sciences Library - 360 photo',
        'Brickell Medical Sciences Library Study Space - 360 photo',
        'CAST Classroom (Lewis Hall 2114) - 360 photo',
        'CAST Lab (Lewis Hall 2116) - 360 photo',
        'Children\'s Hospital of The King\'s Daughters - 360 photo',
        'EVMS Courtyard - 360 Photo',
        'Green space and tables by TowneBank Lawn - 360 photo',
        'Green space and tables by TowneBank Lawn - Video',
        'Hampton Roads Community Foundation Student Center - Video',
        'Hampton Roads Community Foundation Student Center Bookstore - 360 Photo',
        'Hofheimer Hall - Video',
        'Jones Institute - Video',
        'Lester 104 - Video',
        'Lester 107 - Video',
        'Lester 107 - 360 photo',
        'Lester 355 - 360 Photo',
        'Lester Hall - Video',
        'Lester Hall Lobby - 360 Photo',
        'Lester Hall 411 - Video',
        'Lester Hall 411 - 360 Photo',
        'Lewis Hall - Video',
        'Lewis Hall 1033, Roper Auditorium - 360 photo',
        'Lewis Hall 3073 Laboratory - 360 photo',
        'Lewis Hall 3078 Laboratory - 360 photo',
        'McCombs Auditorium - Video',
        'Multidisciplinary Labs (MDLs) - 360 Photo',
        'Multidisciplinary Labs (MDLs) - Video',
        'PA Admin Offices - 360 Photo',
        'Sentara Norfolk General Hospital - 360 photo',
        'Student Parking - 360 Photo',
        'Student Parking - Video',
        'Student Parking Garage - 360 photo',
        'Waitzer Hall - Video'

    ],
    images = ['/anatomy-lab-1.jpg',
        '/anatomy-lab-1.jpg',
        '/lewis-room-2122.jpg',
        '/lewis-room-2122.jpg',
        '/leroy-t-canoles-jr-cancer-research-center-labs.jpg',
        '/proteomics-core-facility.jpg',
        '/flow-cytometry-core-facility.jpg',
        'brickell-exterior.jpg',
        'library-computer-lab.jpg',
        'library-first-floor.jpg',
        'library-study-room.jpg',
        'cast-classroom.jpg',
        'cast-lab.jpg',
        'chkd.jpg',
        'courtyard.jpg',
        'towneBank-lawn.jpg',
        'green-spaces.jpg',
        'student-center.jpg',
        'evms-bookstore.jpg',
        'hofheimer-hall.jpg',
        'jones-institute.jpg',
        'lester-104.jpg',
        'lester-room-107.jpg',
        'lester-room-107.jpg',
        'lester-355.jpg',
        'lester-hall.jpg',
        'lester-lobby.jpg',
        'lester-room-411.jpg',
        'lester-room-411.jpg',
        'lewis-hall.jpg',
        'roper-auditorium.jpg',
        'lewis-room-3073.jpg',
        'lewis-room-3078.jpg',
        'mccombs-auditorium.jpg',
        'mdl-2.jpg',
        'mdl-2.jpg',
        'pa-admin-offices.jpg',
        'sentara.jpg',
        'student-parking-1.jpg',
        'student-parking-2.jpg',
        'student-parking-2.jpg',
        'waitzer-hall.jpg'

    ],
    playButton = [
        '360',
        'play_circle_outline',
        'play_circle_outline',
        '360',
        'play_circle_outline',
        'play_circle_outline',
        'play_circle_outline',
        'play_circle_outline',
        '360',
        '360',
        '360',
        '360',
        '360',
        '360',
        '360',
        '360',
        'play_circle_outline',
        'play_circle_outline',
        '360',
        'play_circle_outline',
        'play_circle_outline',
        '360',
        'play_circle_outline',
        '360',
        '360',
        'play_circle_outline',
        '360',
        'play_circle_outline',
        '360',
        'play_circle_outline',
        '360',
        '360',
        '360',
        'play_circle_outline',
        '360',
        'play_circle_outline',
        '360',
        '360',
        '360',
        'play_circle_outline',
        '360',
        'play_circle_outline'

    ],
altTag=[
    'Anatomy Lab',
    'Anatomy Lab (Lewis 2073)',
    'Art Therapy Studio, Lewis 2122',
    'Art Therapy Studio, Lewis 2122',
    'Biomedical Sciences Cancer Center',
    'Biomedical Sciences Proteomics',
    'Biomedical Sciences Cytometry',
    'Brickell Medical Sciences Library',
    'Brickell Medical Sciences Library Computer Lab',
    'Brickell Medical Sciences Library',
    'Brickell Medical Sciences Library Study Space',
    'CAST Classroom',
    'CAST Lab',
    'Children\'s Hospital of The King\'s Daughters',
    'EMVS Courtyard',
    'Green space and tables by TowneBank Lawn',
    'Green space and tables by TowneBank Lawn',
    'Hampton Roads Community Foundation Student Center',
    'Hampton Roads Community Foundation Student Center Bookstore',
    'Hofheimer Hall',
    'Jones Institute',
    'Lester 104',
    'Lester 107',
    'Lester 107',
    'Lester 355',
    'Lester Hall',
    'Lester Hall Lobby',
    'Lester Hall 411',
    'Lester Hall 411',
    'Lewis Hall',
    'Lewis Hall 1033, Roper Auditorium',
    'Lewis Hall 3073 Laboratory',
    'Lewis Hall 3078 Laboratory',
    'McCombs Auditorium',
    'Multidisciplinary Labs',
    'Multidisciplinary Labs (MDLs)',
    'PA Admin Offices',
    'Sentara Norfolk General Hospital',
    'Student Parking',
    'Student Parking',
    'Student Parking Garage',
    'Waitzer Hall'

]
];

createItems();

// init Isotope
var $container = $('.container').isotope({
    itemSelector: '.item',
    stagger: 80,
    layoutMode: 'fitRows',
    transitionDuration: '0.8s',
    // only opacity for reveal/hide transition
    hiddenStyle: {
      opacity: 0
    },
    visibleStyle: {
      opacity: 1
    }

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

function uncheckAll() {
    $("input[type='checkbox']:checked").prop("checked", false)
  }
  $(':button').on('click', uncheckAll)

function createItems() {
    var $items;
    // loop over colors, locations, images
    // create one item for each
    for (var i = 4, len = elements.length; i < len; i++) {
        for (var j = 0, len2 = elements[j].length; j < len2; j++) {
            //var link = links[i];
            // var location = locations[j];
            // var image = images[k];
            var $item = $('<div />', {
                'class': 'item virtual-tours__content__card ' + locations[j] + ' id=' + linksID[j]
            });
            $item.append('<a href="' + linksID[j] + '" target="_blank"><figure class="virtual-tours__content__card__thumbnail"><img src ="https://www.evms.edu/maps_directions_parking/virtual_tour/assets/thumbnails/' + images[j] + '" alt="'+ altTag[j] + '"/><span class="virtual-tours__icon material-icons">' + playButton[j] + '</span></figure></a>' + '<p class="virtual-tours__content__card__title">' + locations[j] + '</p>');
            // add to items
            $items = $items ? $items.add($item) : $item;
            // outer loop applies to outer array
        }
    }
    $items.appendTo($('.container'));
}