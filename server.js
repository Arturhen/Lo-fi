function instructions(){
   modal.style.display = "block"; 
} 


function addMovie() {
  var inputNewMovie = document.querySelector('#filme')
  var newMovie = inputNewMovie.value
  if(newMovie.endsWith('</iframe>')){
    listarFilmesNaTela(newMovie)
  }
  else{
    alert("Link invalido")
  }
  inputNewMovie.value = ""
 }

function listarFilmesNaTela(filme , ) {
  var listaFilmes = document.querySelector('#youtube')
  var elementoFilme = filme 
  console.log(elementoFilme)
  
  
  var desc = document.querySelector('#filme2').value
  var div = document.createElement('div')
  div.classList.add('box')
  var txt = document.createElement('span')
  var article = document.createElement('article')
  article.innerHTML = elementoFilme
  txt.innerHTML = desc
  div.appendChild(article)
  div.appendChild(txt)
  youtube.appendChild(div)  
  
  document.querySelector('#filme2').value = ""
}



//tenho que enteder mais

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
