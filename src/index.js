import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphyService from './js/giphy-service.js'

function clearFields(){
  $('#search').val("");
  $('#imageToShow').attr("");
}

$('#gifSearch').click(function() {
  let search = $('#search').val();
  clearFields();
  let promise = WeatherService.getSearch(search);
  promise.then(function(response) {
    const body = JSON.parse(response);
    let originalGif = body.data[0].images.original.url;
    $('.imageToShow').attr("src", originalGif);
  });
});
