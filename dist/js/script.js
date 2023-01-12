
const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);


// map on load
// function initialize() {
//     var propertiPeta = {
//         center: new google.maps.LatLng(-6.8932616, 112.4427847, 15),
//         zoom: 14,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     };

//     var peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);

//     // membuat Marker
//     var marker = new google.maps.Marker({
//         position: new google.maps.LatLng(-6.892048, 112.453798),
//         map: peta
//     });

// }

// event jendela di-load
// google.maps.event.addDomListener(window, 'load', initialize);