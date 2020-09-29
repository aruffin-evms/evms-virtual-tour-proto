const virtualTourModal = document.getElementById("virtualTourModal");
const closeModal = document.getElementById("closeModal");

const video = document.getElementById("video");
const mediaModule = document.querySelector('.virtual-tours__media');
const placeholderImage = document.getElementById("placeholderImage")
const placeholderText = document.getElementById("placeholderText")

const html = document.querySelector("html");

const links = document.querySelectorAll(".virtual-tours__link");
const cards = document.querySelectorAll(".virtual-tours__video");

const showAllTours = document.getElementById("showAllTours");

const vrContent = {
  anatomyLab: {
    trigger: document.getElementById("anatomyLabVr"),
    view: "https:vr-views/anatomy-lab.html"
  },
  castClassroom: {
    trigger: document.getElementById("castClassroomVr"),
    view: "./vr-views/cast-classroom.html"
  },
  castLab: {
    trigger: document.getElementById("castLabVr"),
    view: "./vr-views/cast-lab.html"
  },
  lesterRoom: {
    trigger: document.getElementById("lesterRoomVr"),
    view: "./vr-views/lester-room.html"
  },
  lesterHall: {
    trigger: document.getElementById("lesterHallLobbyVr"),
    view: "./vr-views/lester-hall-lobby.html"
  },
  mdLab: {
    trigger: document.getElementById("mdlVr"),
    view: "./vr-views/mdl.html"
  },
  paAdminOffices: {
    trigger: document.getElementById("paAdminOffices"),
    view: "./vr-views/pa-admin-offices.html"
  },
  studentCenterBookStore: {
    trigger: document.getElementById("studentCenterBookStore"),
    view: "./vr-views/student-center-bookstore.html"
  },
  studentParking: {
    trigger: document.getElementById("studentParking"),
    view: "./vr-views/student-parking.html"
  },
  studentParkingGarage: {
    trigger: document.getElementById("studentParkingGarage"),
    view: "./vr-views/student-parking-garage.html"
  },
  chkdExterior: {
    trigger: document.getElementById('chkdExterior'),
    view: './vr-views/chkd-exterior.html' 
  },
  evmsCourtyard: {
    trigger: document.getElementById('evmsCourtyard'),
    view: './vr-views/evms-courtyard.html' 
  },
  lester355: {
    trigger: document.getElementById('lester355'),
    view: './vr-views/lester-355.html'
  },
  lester411: {
    trigger: document.getElementById('lester411'),
    view: './vr-views/lester-411.html'
  },
  lewis2122: {
    trigger: document.getElementById('lewis2122'),
    view: './vr-views/lewis-2122.html'
  },
  lewis3030: {
    trigger: document.getElementsByTagName('lewis3030'),
    view: './vr-views/lewis-3030.html'
  },
  lewis3073: {
    trigger: document.getElementById('lewis3073'),
    view: './vr-views/lewis-3073.html'
  },
  lewis3078: {
    trigger: document.getElementById('lewis3078'),
    view: './vr-views/lewis-3078.html' 
  },
  libraryCompLab: {
    trigger: document.getElementById('libraryCompLab'),
    view: './vr-views/library-comp-lab.html'
  },
  library: {
    trigger: document.getElementById('libraryFirstFloor'),
    view: './vr-views/library-first-floor.html'
  },
  libraryStudyRoom: {
    trigger: document.getElementById('libraryStudyRoom'),
    view: './vr-views/library-study-room.html'
  },
  roperAuditorium: {
    trigger: document.getElementById('roperAuditorium'),
    view: './vr-views/roper-auditorium.html',
  },
  sentaraExterior: {
    trigger: document.getElementById('sentaraExterior'),
    view: './vr-views/sentara-exterior.html'
  },
  towneBank: {
    trigger: document.getElementById('towneBankLawn'),
    view: './vr-views/townebank-lawn.html'
  },
  lester107: {
    trigger: document.getElementById('lester107'),
    view: './vr-views/lester-107.html'
  }
}

// debug 107
document.getElementById('lester107').addEventListener('click', function() {
  console.log('clicked')
})

// video tours
const videoAssets = {
  anatomyLab: "https://www.evms.edu/uploads/videos/anatomy-lab-virtual-tour-clips.mp4",
  brickellLibrary:
    "https://www.evms.edu/uploads/videos/brickell-medical-science-library-virtual-tour-clips.mp4",
  communityCenter:
    "https://www.evms.edu/uploads/videos/hampton-roads-community-foundation-student-center-virtual-tour-clips.mp4",
  multiDisclab: "https://www.evms.edu/uploads/videos/multidisciplinary-labs-virtual-tour-clips.mp4",
  sharedCampus: "https://www.evms.edu/uploads/videos/shared-campus-virtual-tour-clips.mp4",
  studentParking: "https://www.evms.edu/uploads/videos/student-parking-virtual-tour-clips.mp4",
  towneBankLawn:
    "https://www.evms.edu/uploads/videos/towne-bank-lawn-and-green-spaces-virtual-tour-clips.mp4",
    artTherapyOffices: "https://www.evms.edu/uploads/videos/art-therapy-offices-300-305.mp4",
    artTherapy2122: "https://www.evms.edu/uploads/videos/art-therapy-lewis-2122.mp4",
    artTherapy107: "https://www.evms.edu/uploads/videos/art-therapy-room-107.mp4",
    artTherapy411: "https://www.evms.edu/uploads/videos/art-therapy-room-411.mp4",
    mccombsAuditorium: "https://www.evms.edu/uploads/videos/mccombs-auditorium.mp4",
    proteomics: "https://www.evms.edu/uploads/videos/biomedical-sciences-proteomics.mp4",
    cytometry: "https://www.evms.edu/uploads/videos/biomedical-sciences-flow-cytometry.mp4",
    cancerCenter: "https://www.evms.edu/uploads/videos/biomedical-sciences-cancer-center-labs.mp4",
    hofheimerHall: "https://www.evms.edu/uploads/videos/hofheimer-hall.mp4",
    jonesInstitute: "https://www.evms.edu/uploads/videos/jones-institute.mp4",
    lesterHall: "https://www.evms.edu/uploads/videos/lester-hall.mp4",
    lewisHall: "https://www.evms.edu/uploads/videos/lewis-hall.mp4",
    waitzerHall: "https://www.evms.edu/uploads/videos/waitzer-hall.mp4"
};

const hashFilters = {
  physicianAssistant: '#phys-assistant',
  pathAssistant: "#path-assistant",
  artTherapy: '#art-therapy',
  biomedicalSciences: '#biomed',
  surgicalAssisting: '#surgical-assist',
  general: '#general'
};

// anatomy lab vr
attachLink(vrContent.anatomyLab.view, vrContent.anatomyLab.trigger);

// cast classroom vr
attachLink(vrContent.castClassroom.view, vrContent.castClassroom.trigger);

// cast lab vr
attachLink(vrContent.castLab.view, vrContent.castLab.trigger);

// lester room vr
attachLink(vrContent.lesterRoom.view, vrContent.lesterRoom.trigger);

// lester hall lobby vr
attachLink(vrContent.lesterHall.view, vrContent.lesterHall.trigger);

// mdl vr
attachLink(vrContent.mdLab.view, vrContent.mdLab.trigger);

// pa admin offices vr
attachLink(vrContent.paAdminOffices.view, vrContent.paAdminOffices.trigger);

// student center bookstore
attachLink(vrContent.studentCenterBookStore.view, vrContent.studentCenterBookStore.trigger);

// student parking
attachLink(vrContent.studentParking.view, vrContent.studentParking.trigger);

// student parking garage
attachLink(vrContent.studentParkingGarage.view, vrContent.studentParkingGarage.trigger);

// chkd exterior
attachLink(vrContent.chkdExterior.view, vrContent.chkdExterior.trigger)

// evms courtyard 
attachLink(vrContent.evmsCourtyard.view, vrContent.evmsCourtyard.trigger)

// lester 355 
attachLink(vrContent.lester355.view, vrContent.lester355.trigger)

// lester 411 
attachLink(vrContent.lester411.view, vrContent.lester411.trigger)

// lewis 2122 
attachLink(vrContent.lewis2122.view, vrContent.lewis2122.trigger)

// lewis 3030 
attachLink(vrContent.lewis3030.view, vrContent.lewis3030.trigger)

// lewis 3073
attachLink(vrContent.lewis3073.view, vrContent.lewis3073.trigger)

// lewis 3078
attachLink(vrContent.lewis3078.view, vrContent.lewis3078.trigger)

// library comp lab
attachLink(vrContent.libraryCompLab.view, vrContent.libraryCompLab.trigger)

// library first floor
attachLink(vrContent.library.view, vrContent.library.trigger)

// library study room
attachLink(vrContent.libraryCompLab.view, vrContent.libraryStudyRoom.trigger)

// roper auditorium
attachLink(vrContent.roperAuditorium.view, vrContent.roperAuditorium.trigger)

// sentara exterior
attachLink(vrContent.sentaraExterior.view, vrContent.sentaraExterior.trigger)

// towne bank lawn
attachLink(vrContent.towneBank.view, vrContent.towneBank.trigger)

// lester 107
attachLink(vrContent.lester107.view, vrContent.lester107.trigger)

// function to set the url to view the vr photos
function attachLink(url, element) {
  return element.href = url;
}

// get the id of the element when clicked
function findVideoID() {
  document
    .querySelectorAll(".virtual-tours__video")
    .forEach(function (element) {
      element.onclick = function (event) {
        let id = event.target.id;
        injectVideoSource(id);
        return id;
      };
    });
}

findVideoID();

// show modal
function showModal(source) {
  virtualTourModal.style.display = "block";
  disableScroll();
  modalVideo.src = source;
  modalVideo.play();
}

// switch statement to add video to modals
function injectVideoSource(id) {
  console.log(id)
  switch (id) {
    case "anatomyLabCard":
    case "anatomyLabThumbnail":
      showModal(videoAssets.anatomyLab);
      break;

    case "brickellLibraryCard":
    case "brickellThumbnail":
      showModal(videoAssets.brickellLibrary);
      break;

    case "communityCenterCard":
    case "communityThumbnail":
      showModal(videoAssets.communityCenter);
      break;

    case "multiDiscLabCard":
    case "multiDiscThumbnail":
      showModal(videoAssets.multiDisclab);
      break;

    case "sharedCampusCard":
    case "sharedCampusThumbnail":
      showModal(videoAssets.sharedCampus);
      break;

    case "studentParkingCard":
    case "studentParkingThumbnail":
      showModal(videoAssets.studentParking);
      break;

    case "townBankCard":
    case "townBankThumbnail":
      showModal(videoAssets.towneBankLawn);
      break;

    case "artTherapyOfficesCard":
    case "artTherapyOfficesThumbnail":
      showModal(videoAssets.artTherapyOffices)
      break;

    case "artTherapy2122Card": 
    case "artTherapy2122Thumbnail": 
      showModal(videoAssets.artTherapy2122)
      break;

    case "artTherapy107Card":
    case "artTherapy107Thumbnail":
      showModal(videoAssets.artTherapy107)
      break;

    case "artTherapy411Card":
    case "artTherapy411Thumbnail":
      showModal(videoAssets.artTherapy411)
      break;

    case "mccombsAuditoriumCard":
    case "mccombsAuditoriumThumbnail":
      showModal(videoAssets.mccombsAuditorium)
      break;

    case "proteomicsCard":
    case "proteomicsThumbnail":
      showModal(videoAssets.proteomics)
      break;

    case "cytometryCard":
    case "cytometryThumbnail":
      showModal(videoAssets.cytometry)
      break;

    case "cancerCenterCard":
    case "cancerCenterThumbnail":
      showModal(videoAssets.cancerCenter)
      break;
      
    case "hofheimerHallCard":
    case "hofheimerHallThumbnail":
      showModal(videoAssets.hofheimerHall)
      break;

    case "jonesInstituteCard":
    case "jonesInstituteThumbnail":
      showModal(videoAssets.jonesInstitute)
      break;

    case "lesterHallCard":
    case "lesterHallThumbnail":
      showModal(videoAssets.lesterHall)
      break;

    case "lewisHallCard":
    case "lewisHallThumbnail":
      showModal(videoAssets.lewisHall)
      break;

    case "waitzerHallCard":
    case "waitzerHallThumbnail":
      showModal(videoAssets.waitzerHall)
      break;
  }
}

closeModal.addEventListener("click", function () {
  virtualTourModal.style.display = "none";
  enableScroll();
});

function disableScroll() {
  html.style.overflow = "hidden";
}

function enableScroll() {
  html.style.overflow = null;
}

handleHashChange()

function handleHashChange() {
  showAllTours.style.display = "flex";
  showAllTours.style.background = '#943001'
  showAllTours.style.opacity = '1'
  const hash = window.location.href.hash;
  console.log(hash)

  const url = location.hash;
  
  switch (url) {
    case hashFilters.surgicalAssisting:
      links.forEach((link) => {
        if (link.matches(":not(.surgical-assist)")) {
          link.style.display = "none";
        }
      });

      cards.forEach((card) => {
        if (card.matches(":not(.surgical-assist)")) {
          card.style.display = "none";
        }
      });

      break;

    case hashFilters.physicianAssistant:
      links.forEach((link) => {
        if (link.matches(":not(.phys-assistant)")) {
          link.style.display = "none";
        }
      });

      cards.forEach((card) => {
        if (card.matches(":not(.phys-assistant)")) {
          card.style.display = "none";
        }
      });

      break;

    case hashFilters.pathAssistant:
      links.forEach((link) => {
        if (link.matches(":not(.path-assistant)")) {
          link.style.display = "none";
        }
      });

      cards.forEach((card) => {
        if (card.matches(":not(.path-assistant)")) {
          card.style.display = "none";
        }
      });

      break;

    case hashFilters.biomedicalSciences:
      links.forEach((link) => {
        if (link.matches(":not(.biomed)")) {
          link.style.display = "none";
        }
      });

      cards.forEach((card) => {
        if (card.matches(":not(.biomed)")) {
          card.style.display = "none";
        }
      });

      break;

    case hashFilters.artTherapy:
      links.forEach((link) => {
        if (link.matches(":not(.art-therapy)")) {
          link.style.display = "none";
        }
      });

      cards.forEach((card) => {
        if (card.matches(":not(.art-therapy)")) {
          card.style.display = "none";
        }
      });

      break;

      case hashFilters.general:
      links.forEach((link) => {
        if (link.matches(":not(.general)")) {
          link.style.display = "none";
        }
      });

      cards.forEach((card) => {
        if (card.matches(":not(.general)")) {
          card.style.display = "none";
        }
      });

      break;
  }
}

window.onhashchange = handleHashChange;

showAllTours.addEventListener("click", function () {
  history.replaceState({}, document.title, window.location.href.split("#")[0]);

  showAllTours.style.backgroundColor = "gray";
  showAllTours.style.opacity = ".2";
  showAllTours.style.cursor = 'not-allowed'

  cards.forEach((card) => {
    card.style.display = "block";
  });

  links.forEach((link) => {
    link.style.display = "block";
  });
});


function findButtonID() {
  document.querySelectorAll(".virtual-tours__cta").forEach(function (button) {
    button.onclick = function(event) {
      let id = event.target.id
      getButtonID(id)
    }
  })
 }

 findButtonID() 

 const iframe = document.getElementById('iframeModule')
//  switch statement to add video to media module
function getButtonID(id) {
  switch (id) {
    case "sharedCampusCta":
      addIframeToModule("https://www.youtube.com/embed/9mUpHMKVfAE", true)
      break;

    case "simCenterCta":
      // https://www.youtube.com/embed/playlist?list=PL9ZDFDp9CGySJaR7ggu5Kd_bHlaAsyrRW
      addIframeToModule("https://www.youtube.com/embed/playlist?list=PL9ZDFDp9CGySJaR7ggu5Kd_bHlaAsyrRW")
      break;

    case "hamptonRoadsCta":
      addIframeToModule("https://www.youtube.com/embed/jNxHY9Kb2oo", true)
      break;

    default:
      break;
  }
}


function addIframeToModule(source, regularVideo) {
  placeholderImage.style.display = "none"
  mediaModule.style.backgroundColor = 'black'
  mediaModule.style.height = 'auto'
  video.style.display = "none"
  iframe.setAttribute('src', source)
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.display = 'block'
  if(regularVideo == true) {
    iframe.src = source + '?autoplay=1'
  }
}



