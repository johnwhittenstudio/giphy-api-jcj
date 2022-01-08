import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import GiphySearch from './js/giphy-search.js';


function clearFields(){
  $('#search').val("");
  $('#imageToShow').attr("");
}

$('#gifSearch').click(function() {
  let search = $('#search').val();
  clearFields();
  let promise = GiphySearch.getSearch(search);
  promise.then(function(response){
    const body = JSON.parse(response);
    let downSizedGif1 = body.data[0].images.downsized.url;
    $('#imageToShow').attr("src", downSizedGif1);
  });
});
