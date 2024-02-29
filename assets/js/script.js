$(function () {
  const contenedorSuccess = $(".contenedor_success");
  const contenedorCardFormulario = $(".contenedor_card");

  const form = $("form");
  const input = $("#contenedor_card_input_mail");
  const spanError = $(".contenenedor_card_contenedor_error_message");

  const botonSuccess = $(".contenedor_success_button");

  form.on("submit", function (eventObject) {
    eventObject.preventDefault();
    if (/^[a-zA-Z\d\.\_\-]+@[a-zA-Z]+\.com$/g.test(input.val())) {
      contenedorSuccess.css("display", "block");
      contenedorCardFormulario.css("display", "none");
    }
  });

  input.on("input", function () {
    if (/^[a-zA-Z\d\.\_\-]+@[a-zA-Z]+\.com$/g.test(input.val())) {
      input.removeClass("input_error");
      spanError.css("visibility", "hidden");
    } else {
      input.addClass("input_error");
      spanError.css("visibility", "visible");
    }
  });
  input.on("focus", function () {
    if (/^[a-zA-Z\d\.\_\-]+@[a-zA-Z]+\.com$/g.test(input.val())) {
      input.removeClass("input_error");
      spanError.css("visibility", "hidden");
      console.log("1");
    } else {
      console.log("2");
      input.addClass("input_error");
      spanError.css("visibility", "visible");
    }
  });

  botonSuccess.on("click", function () {
    contenedorSuccess.css("display", "none");
    contenedorCardFormulario.css("display", "flex");
  });
});
