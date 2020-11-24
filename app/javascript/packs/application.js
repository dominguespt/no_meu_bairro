// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require sweetalert2
//= require sweet-alert2-rails
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// MAPBOX FROM GeoCoding Lecture.
import { initMapbox } from '../plugins/init_mapbox';
import { initAutocomplete } from '../plugins/init_autocomplete'

// External imports
import "bootstrap";
import "jquery-bar-rating";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';
import { initStarRating } from '../plugins/init_star_rating';
import { initSweetalert } from '../plugins/init_sweetalert';
import { previewImageOnFileSelect } from '../plugins/photo_preview';


document.addEventListener('turbolinks:load', () => {
  initMapbox();
  initAutocomplete();
  initStarRating();
  previewImageOnFileSelect();
  initSweetalert('#sweet-alert', {
    title: "A nice alert",
    text: "This is a great alert, isn't it?",
    icon: "success"
  });
  initSweetalert('#sweet-alert-demo', {
    title: "Are you sure?",
    text: "This action cannot be reversed",
    icon: "warning"
  }, (value) => {
    if (value) {
      const link = document.querySelector('#delete-link');
      link.click();
    }
  });
});




