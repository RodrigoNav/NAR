document.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementById("back__to__top");

  // Función para controlar la visibilidad del botón
  function toggleBackToTopButton() {
      if (window.scrollY > 200) { // Cambia este valor a la cantidad de desplazamiento que desees
          button.style.display = "block"; // Mostrar el botón
      } else {
          button.style.display = "none"; // Ocultar el botón
      }
  }

  // Agrega un evento de clic al botón para volver arriba
  button.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Agrega un oyente de eventos para controlar la visibilidad del botón cuando se desplaza
  window.addEventListener("scroll", toggleBackToTopButton);

  // Llama a la función para verificar la visibilidad inicial
  toggleBackToTopButton();
});
