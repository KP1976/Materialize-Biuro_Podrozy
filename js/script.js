$(function() {
  // SCROLLSPY
  $(".scrollspy").scrollSpy();

  // BOCZNE MENU
  $(".button-collapse").sideNav();

  // SLIDER
  $(".slider").slider({
    indicators: true,
    height: 700,
    transition: 700,
    interval: 5000
  });

  // AUTOUZUPEŁNIANIE
  $("input.autocomplete").autocomplete({
    data: {
      Bahama: null,
      Bermudy: null,
      Floryda: null,
      Hawaje: null,
      Jamajka: null,
      Kanada: null,
      Francja: null,
      Polska: null,
      Senegal: null,
      "Wyspy Wielkanocne": null,
      "Wyspy Zielonego Przylądka": null
    }
  });
});
