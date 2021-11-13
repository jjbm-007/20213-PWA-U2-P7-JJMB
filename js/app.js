let contextSW = '/20213-PWA-U2-P7-JJMB/sw.js';
let url = window.location.href;

let player = $('#player');
let photoUser = $('#photoUser');

let btnCamera = $('#btnCamera');
let btnCameraBack = $('#btnCameraBack');
let btnTakePhoto = $('#btnTakePhoto');

let titleCard = "";
const camera = new Camera(player[0]);

btnCamera.on('click', () => {
    console.log('btnCamera');

    camera.on().then( result => {
        if (!result) {
            alert('Error al iniciar la cámara');
        }
        titleCard = "Camara Frontal"
    });
});

btnCameraBack.on('click', () => {
    console.log('btnCameraBack');

    camera.onBack().then( result => {
        if (!result) {
            alert('Error al iniciar la cámara');
        }
        titleCard = "Camara Tracera"
    });
});

btnTakePhoto.on('click', () => {
    console.log('btnTakePhoto');
    camera.off();
    // photoUser.attr('src',camera.takePhoto());

    let arrayPhotos = new Array()
    arrayPhotos.push( camera.takePhoto());

    arrayPhotos.forEach(element => {
        let cardPhotos = $(`
        <img id="photoUser" src="${element}" width="300" height="300"/>
        <h3>${titleCard}</h3>
        `);

        $('#cards').append(cardPhotos);
    });

});

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        contextSW = '/sw.js'
    }
    navigator.serviceWorker.register(contextSW);
}