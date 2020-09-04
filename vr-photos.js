const anatomyLabVr = document.getElementById("anatomyLabVr");
const anatomyLabVideo = document.getElementById("anatomyLabVideo");
const castClassroomVr = document.getElementById("castClassroomVr");
const castLabVr = document.getElementById("castLabVr");
const lesterRoomVr = document.getElementById("lesterRoomVr");
const lesterHallLobbyVr = document.getElementById("lesterHallLobbyVr");
const mdlVr = document.getElementById("mdlVr");
const paAdminOffices = document.getElementById("paAdminOffices");
const studentCenterBookStore = document.getElementById("studentCenterBookStore");
const studentParking = document.getElementById("studentParking");
const studentParkingGarage = document.getElementById("studentParkingGarage");
const chkdExterior = document.getElementById('chkdExterior')
const evmsCourtyard = document.getElementById('evmsCourtyard')
const lester355 = document.getElementById('lester355')
const lester107 = document.getElementById('lester107')
const artTherapy = document.getElementById('artTherapy')
const lester411 = document.getElementById('lester411')
const lewis2122 = document.getElementById('lewis2122')
const lewis3073 = document.getElementById('lewis3073')
const lewis3030 = document.getElementsByTagName('lewis3030')
const lewis3078 = document.getElementById('lewis3078')
const libraryCompLab = document.getElementById('libraryCompLab')
const libraryFirstFloor = document.getElementById('libraryFirstFloor')
const libraryStudyRoom = document.getElementById('libraryStudyRoom')
const roperAuditorium = document.getElementById('roperAuditorium')
const sentaraExterior = document.getElementById('sentaraExterior')
const towneBankLawn = document.getElementById('towneBankLawn')

const virtualTourModal = document.getElementById("virtualTourModal");
const closeModal = document.getElementById("closeModal");

const video = document.getElementById("video")
const placeholderImage = document.getElementById("placeholderImage")
const placeholderText = document.getElementById("placeholderText")

const html = document.querySelector("html");

const links = document.querySelectorAll(".virtual-tours__link");
const cards = document.querySelectorAll(".virtual-tours__video");

const showAllTours = document.getElementById("showAllTours");
const removeHash = history.replaceState(
  {},
  document.title,
  window.location.href.split("#")[0]
);

// vr html docs
const vrViews = {
  anatomyLabView: "./vr-views/anatomy-lab.html",
  artTherapyOffices: "./vr-views/art-therapy.html",
  castClassroomView: "./vr-views/cast-classroom.html",
  castLabView: "./vr-views/cast-lab.html",
  lesterRoom: "./vr-views/lester-room.html",
  lesterHallLobbyView: "./vr-views/lester-hall-lobby.html",
  mdlView: "./vr-views/mdl.html",
  paAdminOfficesView: "./vr-views/pa-admin-offices.html",
  studentCenterBookStoreView: "./vr-views/student-center-bookstore.html",
  studentParkingView: "./vr-views/student-parking.html",
  studentParkingGarageView: "./vr-views/student-parking-garage.html",
  chkdExteriour: './vr-views/chkd-exterior.html',
  evmsCourtyard: './vr-views/evms-courtyard.html',
  lester355: './vr-views/lester-355.html',
  lester411: './vr-views/lester-411.html',
  lewis2122: './vr-views/lewis-2122.html',
  lewis3030: './vr-views/lewis-3030.html',
  lewis3073: './vr-views/lewis-3073.html',
  lewis3078: './vr-views/lewis-3078.html',
  libraryCompLab: './vr-views/library-comp-lab.html',
  libraryFirstFloor: './vr-views/library-first-floor.html',
  libraryStudyRoom: './vr-views/library-study-room.html',
  roperAuditorium: './vr-views/roper-auditorium.html',
  sentaraExteririor: './vr-views/sentara-exterior.html',
  towneBankLawn: './vr-views/townebank-lawn.html'
};

// video tours
const videoAssets = {
  anatomyLab: "./assets/videos/anatomy-lab-virtual-tour-clips.mp4",
  brickellLibrary:
    "./assets/videos/brickell-medical-science-library-virtual-tour-clips.mp4",
  communityCenter:
    "./assets/videos/hampton-roads-community-foundation-student-center-virtual-tour-clips.mp4",
  multiDisclab: "./assets/videos/multidisciplinary-labs-virtual-tour-clips.mp4",
  sharedCampus: "./assets/videos/shared-campus-virtual-tour-clips.mp4",
  studentParking: "./assets/videos/student-parking-virtual-tour-clips.mp4",
  towneBankLawn:
    "./assets/videos/towne-bank-lawn-and-green-spaces-virtual-tour-clips.mp4",
    artTherapyOffices: "./assets/videos/art-therapy-offices-300-305.mp4",
    artTherapy2122: "./assets/videos/art-therapy-lewis-2122.mp4",
    artTherapy107: "./assets/videos/art-therapy-room-107.mp4",
    artTherapy411: "./assets/videos/art-therapy-room-411.mp4"
};

const hashFilters = {
  student: "#student",
  physicianAssistant: "#phys-assistant",
  general: "#general",
  lab: "#lab",
  library: "#library",
  classroom: "#classroom",
};

// anatomy lab vr
attachLink(vrViews.anatomyLabView, anatomyLabVr);

// art therapy
// attachLink(vrViews.artTherapyOffices, artTherapy);

// cast classroom vr
attachLink(vrViews.castClassroomView, castClassroomVr);

// cast lab vr
attachLink(vrViews.castLabView, castLabVr);

// lester room vr
attachLink(vrViews.lesterRoom, lesterRoomVr);

// lester hall lobby vr
attachLink(vrViews.lesterHallLobbyView, lesterHallLobbyVr);

// mdl vr
attachLink(vrViews.mdlView, mdlVr);

// pa admin offices vr
attachLink(vrViews.paAdminOfficesView, paAdminOffices);

// student center bookstore
attachLink(vrViews.studentCenterBookStoreView, studentCenterBookStore);

// student parking
attachLink(vrViews.studentParkingView, studentParking);

// student parking garage
attachLink(vrViews.studentParkingGarageView, studentParkingGarage);

// chkd exterior
attachLink(vrViews.chkdExteriour, chkdExterior)

// evms courtyard 
attachLink(vrViews.evmsCourtyard, evmsCourtyard)

// lester 355 
attachLink(vrViews.lester355, lester355)

// lester 411 
attachLink(vrViews.lester411, lester411)

// lewis 2122 
attachLink(vrViews.lewis2122, lewis2122)

// lewis 3030 
attachLink(vrViews.lewis3030, lewis3030)

// lewis 3073
attachLink(vrViews.lewis3073, lewis3073)

// lewis 3078
attachLink(vrViews.lewis3078, lewis3078)

// library comp lab
attachLink(vrViews.libraryCompLab, libraryCompLab)

// library first floor
attachLink(vrViews.libraryFirstFloor, libraryFirstFloor)

// library study room
attachLink(vrViews.libraryStudyRoom, libraryStudyRoom)

// roper auditorium
attachLink(vrViews.roperAuditorium, roperAuditorium)

// sentara exterior
attachLink(vrViews.sentaraExteririor, sentaraExterior)

// towne bank lawn
attachLink(vrViews.towneBankLawn, towneBankLawn)

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

function handleHashChange() {
  showAllTours.style.display = "flex";

  const url = location.hash;

  switch (url) {
    case hashFilters.student:
      links.forEach((link) => {
        if (link.matches(":not(.student)")) {
          link.style.display = "none";
        }
      });

      cards.forEach((card) => {
        if (card.matches(":not(.student)")) {
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

    case hashFilters.lab:
      links.forEach((link) => {
        if (link.matches(":not(.lab)")) {
          link.style.display = "none";
        }
      });

      cards.forEach((card) => {
        if (card.matches(":not(.lab)")) {
          card.style.display = "none";
        }
      });

      break;

    case hashFilters.library:
      links.forEach((link) => {
        if (link.matches(":not(.library)")) {
          link.style.display = "none";
        }
      });

      cards.forEach((card) => {
        if (card.matches(":not(.library)")) {
          card.style.display = "none";
        }
      });

      break;

    case hashFilters.classroom:
      links.forEach((link) => {
        if (link.matches(":not(.classroom)")) {
          link.style.display = "none";
        }
      });

      cards.forEach((card) => {
        if (card.matches(":not(.classroom)")) {
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

function addVideoToModule(videoAsset) {
  placeholderImage.style.display = "none"
  placeholderText.style.display = "none"
  video.src = videoAsset
  video.style.display = "block"
  video.style.animation = "fadeIn 2s"
  video.play()
  console.log('clcik')
}

//  switch statement to add video to media module
function getButtonID(id) {
  switch (id) {
    case "sharedCampusCta":
      addVideoToModule(videoAssets.sharedCampus, video)
      break;

    case "simCenterCta":
      addVideoToModule(videoAssets.anatomyLab, video)
      break;

    case "hamptonRoadsCta":
      addVideoToModule(videoAssets.sharedCampus, video)
      break;

    default:
      break;
  }
}



