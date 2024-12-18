const navLinks = document.querySelectorAll("header nav a");
const logoLink = document.querySelector(".logo img");
const sections = document.querySelectorAll("section");
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("header nav");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
});

const activePage = () => {
  const header = document.querySelector("header");
  const barsBox = document.querySelector(".bars-box");

  header.classList.remove("active");
  setTimeout(() => {
    header.classList.add("active");
  }, 1100);

  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  barsBox.classList.remove("active");
  setTimeout(() => {
    barsBox.classList.add("active");
  }, 1100);

  sections.forEach((section) => {
    section.classList.remove("active");
  });

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// navLinks.forEach((link, idx) => {
//     link.addEventListener('click', () => {
//         if (!link.classList.contains('active')) {
//             activePage();
//             console.log(idx)

//             link.classList.add('active')

//             setTimeout(() => {
//                 sections[idx].classList.add('active');
//             }, 1100);
//         }
//     })
// })

navLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (idx < 5) {
      if (!link.classList.contains("active")) {
        activePage();
        console.log(idx);

        link.classList.add("active");

        setTimeout(() => {
          sections[idx].classList.add("active");
        }, 1100);
      }
    }
  });
});

logoLink.addEventListener("click", () => {
  if (!navLinks[0].classList.contains("active")) {
    activePage();

    navLinks[0].classList.add("active");

    setTimeout(() => {
      sections[0].classList.add("active");
    }, 1100);
  }
});

const tvBtns = document.querySelectorAll(".tv-btn");

tvBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    const tvDetails = document.querySelectorAll(".tv-detail");

    tvBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");

    tvDetails.forEach((detail) => {
      detail.classList.remove("active");
    });
    tvDetails[idx].classList.add("active");
  });
});

const arrowRight = document.querySelector(
  ".sucursales-box .navigation .arrow-right"
);
const arrowLeft = document.querySelector(
  ".sucursales-box .navigation .arrow-left"
);

let index = 0;

const activePortfolio = () => {
  const imgSlide = document.querySelector(".sucursales-carousel .img-slide");
  const portfolioDetails = document.querySelectorAll(".sucursales-detail");

  imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
    index * 2
  }rem))`;

  portfolioDetails.forEach((detail) => {
    detail.classList.remove("active");
  });
  portfolioDetails[index].classList.add("active");
};

arrowRight.addEventListener("click", () => {
  if (index < 3) {
    index++;
    arrowLeft.classList.remove("disabled");
  } else {
    index = 4;
    arrowRight.classList.add("disabled");
  }

  activePortfolio();
});

arrowLeft.addEventListener("click", () => {
  if (index > 1) {
    index--;
    arrowRight.classList.remove("disabled");
  } else {
    index = 0;
    arrowLeft.classList.add("disabled");
  }

  activePortfolio();
});

// Inicializar EmailJS
emailjs.init("lNwLcUqMp1-OfoutA");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Capturar datos del formulario
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Configurar parámetros para enviar el correo
    const templateParams = {
      fullName: fullName,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    };

    // Enviar el correo
    emailjs.send("service_zmdfkb6", "template_pi3omeh", templateParams).then(
      function (response) {
        alert("Correo enviado con éxito: " + response.status);

        // Resetea el formulario después de 4 segundos
        setTimeout(() => {
          document.getElementById("contact-form").reset();
          // console.log("Formulario reseteado después de 4 segundos.");
        }, 2000);
      },
      function (error) {
        alert("Hubo un error: " + error.text);
      }
    );
  });

const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let indice = 0;

function showSlide(newIndex) {
    indice = newIndex;
  if (indice < 0) {
    indice = images.length - 1;
  } else if (indice >= images.length) {
    indice = 0;
  }
  const offset = -indice * 100; // 100% del ancho del contenedor
  slider.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener("click", () => {
  showSlide(indice - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(indice + 1);
});
