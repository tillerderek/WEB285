'use strict';

fetch('js/data.json')
  .then((response) => handleErrors(response))
  .then((data) => fetchSuccess(data))
  .catch((error) => fetchError(error));

function handleErrors(response) {
  if (!response.ok) {
    throw response.status + ': ' + response.statusText;
  }
  return response.json();
}

function fetchError(error) {
  console.log(error);
  const RESPONSE_CONTAINER = document.getElementById('response-container')
    ? RESPONSE_CONTAINER.remove()
    : '';
  const MSG = 'There was a problem getting the data';
  const P = document.createElement('p');
  P.id = 'response-container';
  P.textContent = MSG;
  const ALL_BODY_CHILDREN = document.querySelectorAll('body > *');
  ALL_BODY_CHILDREN.forEach((el) => (el.style.display = 'none'));
  document.getElementsByTagName('body')[0].appendChild(P);
}

function fetchSuccess(dataFromServer) {
  console.log(dataFromServer);
  const ALBUMS_APP = {
    data() {
      return {
        listName: 'The Beatles North American Albums',
        albums: dataFromServer.albums,
        i: 0,
        showDates: false,
      }; // end return
    }, // end data()
    methods: {
      moveForward() {
        this.i < dataFromServer.albums.length - 1 ? this.i++ : '';
      }, // end moveForward
      moveBack() {
        this.i > 0 ? this.i-- : '';
      }, //end move Back
    }, //end methods
  }; // end ALBUMS_APP
  Vue.createApp(ALBUMS_APP).mount('#app');
} // end fetchSuccess function
