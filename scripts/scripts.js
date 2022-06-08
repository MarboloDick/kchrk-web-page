var sidemenu, menu_icon, project_image, image_index;
navigation = document.getElementById("navigation");
sidemenu = document.getElementById("sidemenu");
menu_icon = document.getElementById('menu_icon');
project_image1 = document.getElementById('project_image1');
project_image2 = document.getElementById('project_image2');
project_image3 = document.getElementById('project_image3');
project_image4 = document.getElementById('project_image4');
project_image5 = document.getElementById('project_image5');
project_image6 = document.getElementById('project_image6');
project_image7 = document.getElementById('project_image7');
project_image8 = document.getElementById('project_image8');
descriptor1 = document.getElementById('descriptor1');
descriptor2 = document.getElementById('descriptor2');
descriptor3 = document.getElementById('descriptor3');
descriptor4 = document.getElementById('descriptor4');
descriptor5 = document.getElementById('descriptor5');
descriptor6 = document.getElementById('descriptor6');
descriptor7 = document.getElementById('descriptor7');
descriptor8 = document.getElementById('descriptor8');

function sidemenu_open() {
  sidemenu.classList.add('opened');
  sidemenu.classList.remove('closed');
  sidemenu.style.marginLeft = '0vw';
  menu_icon.setAttribute('onclick', 'sidemenu_close()');
  navigation.style.position = 'fixed';
}

function sidemenu_close() {
  sidemenu.classList.add('closed');
  sidemenu.classList.remove('opened');
  sidemenu.style.marginLeft = '100vw';
  menu_icon.setAttribute('onclick', 'sidemenu_open()');
  navigation.style.position = 'absolute';
}

function show1() {
  project_image1.setAttribute('style', 'transform: translate3d(0px, 0px, 0px)');
  descriptor1.setAttribute('style', 'color: var(--gold);');
}

function hide1() {
  project_image1.setAttribute('style', 'transform: translate3d(0px, 360px, 0px)');
  descriptor1.setAttribute('style', 'color: var(--metall);');
}

function show2() {
  project_image2.setAttribute('style', 'transform: translate3d(0px, 0px, 0px)');
  descriptor2.setAttribute('style', 'color: var(--gold);');
}

function hide2() {
  project_image2.setAttribute('style', 'transform: translate3d(0px, 360px, 0px)');
  descriptor2.setAttribute('style', 'color: var(--metall);');
}

function show3() {
  project_image3.setAttribute('style', 'transform: translate3d(0px, 0px, 0px)');
  descriptor3.setAttribute('style', 'color: var(--gold);');
}

function hide3() {
  project_image3.setAttribute('style', 'transform: translate3d(0px, 360px, 0px)');
  descriptor3.setAttribute('style', 'color: var(--metall);');
}

function show4() {
  project_image4.setAttribute('style', 'transform: translate3d(0px, 0px, 0px)');
  descriptor4.setAttribute('style', 'color: var(--gold);');
}

function hide4() {
  project_image4.setAttribute('style', 'transform: translate3d(0px, 360px, 0px)');
  descriptor4.setAttribute('style', 'color: var(--metall);');
}

function show5() {
  project_image5.setAttribute('style', 'transform: translate3d(0px, 0px, 0px)');
  descriptor5.setAttribute('style', 'color: var(--gold);');
}

function hide5() {
  project_image5.setAttribute('style', 'transform: translate3d(0px, 360px, 0px)');
  descriptor5.setAttribute('style', 'color: var(--metall);');
}

function show6() {
  project_image6.setAttribute('style', 'transform: translate3d(0px, 0px, 0px)');
  descriptor6.setAttribute('style', 'color: var(--gold);');
}

function hide6() {
  project_image6.setAttribute('style', 'transform: translate3d(0px, 360px, 0px)');
  descriptor6.setAttribute('style', 'color: var(--metall);');
}

function show7() {
  project_image7.setAttribute('style', 'transform: translate3d(0px, 0px, 0px)');
  descriptor7.setAttribute('style', 'color: var(--gold);');
}

function hide7() {
  project_image7.setAttribute('style', 'transform: translate3d(0px, 360px, 0px)');
  descriptor7.setAttribute('style', 'color: var(--metall);');
}

function show8() {
  project_image8.setAttribute('style', 'transform: translate3d(0px, 0px, 0px)');
  descriptor8.setAttribute('style', 'color: var(--gold);');
}

function hide8() {
  project_image8.setAttribute('style', 'transform: translate3d(0px, 360px, 0px)');
  descriptor8.setAttribute('style', 'color: var(--metall);');
}
