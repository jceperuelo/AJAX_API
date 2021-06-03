var recu = (num) => {
  let alea =
    "https://rickandmortyapi.com/api/character/" +
    Math.trunc(Math.random() * (672 - 1) + 1);

  $.ajax({
    url: alea,
    success: function (respuesta) {
      valor = respuesta;
      $("#imagen" + num).attr("src", respuesta.image);
      $("#titulo" + num).html(respuesta.name);
      $("#especie" + num).html(respuesta.species);
      $("#tipo" + num).html(respuesta.type);
      $("#genero" + num).html(respuesta.gender);
    },
    error: function () {
      console.log("No se ha podido obtener la información");
    },
  });
};

window.onload = function () {
  for (let i = 0; i < 6; i++) {
    recu(i);
  }
};
