//Obtener elementos de la clase close
let links = document.querySelectorAll(".close")

//Recorrerlos
links.forEach(function(link){
  link.addEventListener("click", function(event){     //Agregarles el evento click
    event.preventDefault();
    let content = document.querySelector(".content");

  //Quitar clases de animacion que ya tiene
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");

    //Agregar clases para animar su fade out
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    setTimeout(function(){
      location.href = "../assets/boletin/index.html";
    }, 600)

  })
})
