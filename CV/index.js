$(function(){
  $(".fa-bars").click(function(){ //das click a las barras
    $(".nav-bar").css("display", "flex"); //se muestra el menu
    $(".nav-bar").css("flex-flow", "column"); //modifico el menu
    $(".fa-times").css("display", "block"); //se muestra la equis
    $(".fa-bars").css("display", "none"); //ocultas las barras
  });

  $(".fa-times").click(function(){
    $(".nav-bar").css("display", "none");
    $(".fa-bars").css("display", "block");
    $(".fa-times").css("display", "none")
  });
});
