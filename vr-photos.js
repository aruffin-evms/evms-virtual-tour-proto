const anatomyLabVr = document.getElementById('anatomyLabVr');
const anatomyLabVideo = document.getElementById('anatomyLabVideo');
const castClassroomVr = document.getElementById('castClassroomVr');
const castLabVr = document.getElementById('castLabVr');
const lesterRoomVr = document.getElementById('lesterRoomVr');
const lesterHallLobbyVr = document.getElementById('lesterHallLobbyVr')
const mdlVr = document.getElementById('mdlVr');
const paAdminOffices = document.getElementById('paAdminOffices');
const studentCenterBookStore = document.getElementById('studentCenterBookStore');
const studentParking = document.getElementById('studentParking')
const studentParkingGarage = document.getElementById('studentParkingGarage');

const anatomyLabCard = document.getElementById('anatomyLabCard')
const brickellLibraryCard = document.getElementById('brickellLibraryCard')
const communityCenterCard = document.getElementById('communityCenterCard')
const multidiscLabCard = document.getElementById('multidiscLabCard')
const sharedCampusCard = document.getElementById('sharedCampusCard')
const studentParkingCard = document.getElementById('studentParkingCard')
const townBankCard = document.getElementById('townBankCard')

const virtualTourModal = document.getElementById('virtualTourModal')
const closeModal = document.getElementById('closeModal')

closeModal.addEventListener('click', function() {
  virtualTourModal.style.display = 'none'
})

// vr html docs
const vrViews = {
  anatomyLabView: './vr-views/anatomy-lab.html',
  castClassroomView: './vr-views/cast-classroom.html',
  castLabView: './vr-views/cast-lab.html',
  lesterRoom: './vr-views/lester-room.html',
  lesterHallLobbyView: './vr-views/lester-hall-lobby.html',
  mdlView: './vr-views/mdl.html',
  paAdminOfficesView: './vr-views/pa-admin-offices.html',
  studentCenterBookStoreView: './vr-views/student-center-bookstore.html',
  studentParkingView: './vr-views/student-parking.html',
  studentParkingGarageView: './vr-views/student-parking-garage.html'
}

// video tours
const videoAssets = {
  anatomyLab: './assets/videos/anatomy-lab-virtual-tour-clips.mp4',
  brickellLibrary: './assets/videos/brickell-medical-science-library-virtual-tour-clips.mp4',
  communityCenter: './assets/videos/hampton-roads-community-foundation-student-center-virtual-tour-clips.mp4',
  multiDiscLabs: './assets/videos/multidisciplinary-labs-virtual-tour-clips.mp4',
  sharedCampus: './assets/videos/shared-campus-virtual-tour-clips.mp4',
  studentParking: './assets/videos/student-parking-virtual-tour-clips.mp4',
  towneBankLawn: './assets/videos/towne-bank-lawn-and-green-spaces-virtual-tour-clips.mp4'
}

// anatomy lab vr
attachLink(vrViews.anatomyLabView, anatomyLabVr)

// cast classroom vr
attachLink(vrViews.castClassroomView, castClassroomVr)

// cast lab vr
attachLink(vrViews.castLabView, castLabVr)

// lester room vr
attachLink(vrViews.lesterRoom, lesterRoomVr)

// lester hall lobby vr
attachLink(vrViews.lesterHallLobbyView, lesterHallLobbyVr)

// mdl vr
attachLink(vrViews.mdlView, mdlVr)

// pa admin offices vr
attachLink(vrViews.paAdminOfficesView, paAdminOffices)

// student center bookstore
attachLink(vrViews.studentCenterBookStoreView, studentCenterBookStore)

// student parking
attachLink(vrViews.studentParkingView, studentParking)

// student parking garage 
attachLink(vrViews.studentParkingGarageView, studentParkingGarage)

// function to set the url to view the vr photos
function attachLink(url, element) {
  return element.href = url;
}



// console.log('hi')
function findID() {
  // console.log('function called')
 document.querySelectorAll('.virtual-tours__video').forEach(function(element) {
  element.onclick = function(event) {
    let id = event.target.id;
    injectVideoSource(id)
    return id
  }
 })
}

findID()

function showModal(source) {
  virtualTourModal.style.display = 'block'
  modalVideo.src = source
  modalVideo.play()
}

function injectVideoSource(id) {
  console.log(id)
  switch (id) {
    case 'anatomyLabCard':
      showModal(videoAssets.anatomyLab)
      break;

    case 'brickellLibraryCard': 
      showModal(videoAssets.brickellLibrary)
      break;
    
    case 'communityCenterCard':
      showModal(videoAssets.communityCenter)
      break;

    case 'multidiscLabCard':
      showModal(videoAssets.multiDiscLabs)
      break;

    case 'sharedCampusCard':
      showModal(videoAssets.sharedCampus)
      break;

    case 'studentParkingCard':
      showModal(videoAssets.studentParking)
      break;

    case 'townBankCard':
      showModal(videoAssets.towneBankLawn)
      break;
  }
}





// function injectVideo() {
//   switch (key) {
//     case value:
      
//       break;
  
//     default:
//       break;
//   }
// }


// ! delete
// vr images
// const vrAssets = {
//   anatomyLab: './assets/images/anatomy-lab.jpg',
//   castClassroom: './assets/images/cast-classroom.jpg',
//   castLab: './assets/images/cast-lab.jpg',
//   lesterRoom: './assets/images/lester-104.jpg',
//   lesterLobby: './assets/images/lester-hall-norfolk-southern-foundation-lobby.jpg',
//   mdl: './assets/images/mdl.jpg',
//   paAdmin: './assets/images/pa-admin-offices.jpg',
//   studentCenter: './assets/images/student-center-and-bookstore.jpg',
//   studentParking: './assets/images/student-parking.jpg',
//   studentParkingGarage: './assets/images/student-parking-garage.jpg'
// }

