function Home() {
         document.location.href = "Index.html"
}

function aRegistro() {
         
        // alert("IR A REGISTRO")
         location.href = "Registro.html"
}

//Menu dropdown 
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

//alerta Registro
function showMessage() {
    alert('Se ha registrado con éxito.');
}

//Formulario registro
const user = document.getElementById("usuario");
const mail = document.getElementById("email");
const password = document.getElementById("pwd");
user.addEventListener("input", function (event) {
  if (user.validity.tooShort) {
    user.setCustomValidity("Introduzca un nombre de usuario con al menos 5 caracteres");
  } else {
    user.setCustomValidity("");
  }
});
password.addEventListener("input", function (event) {
  if (password.validity.patternMismatch) {
    password.setCustomValidity("Introduzca una contraseña de entre 10 y 20 caracteres alfanuméricos.");
  } else {
    password.setCustomValidity("");
  }
});

function submitForm (){
  document.login.submit();
}