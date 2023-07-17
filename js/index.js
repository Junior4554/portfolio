let btnOpenMenu = document.querySelector("#open-menu");
let btnCloseMenu = document.querySelector("#close-menu");
let menu = document.querySelector("#mobile-menu");

btnOpenMenu.addEventListener("click", () => {
    menu.classList.remove("disabled");
})

btnCloseMenu.addEventListener("click", () => {
    menu.classList.add("disabled");
})

document.querySelector('#aboutme-link').addEventListener('click', function() {
    menu.classList.add("disabled");
    document.querySelector('#aboutme').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.querySelector('#projects-link').addEventListener('click', function() {
    menu.classList.add("disabled");
    document.querySelector('#proyects').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.querySelector('#contact-link').addEventListener('click', function() {
    menu.classList.add("disabled");
    document.querySelector('#contact').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.querySelector('#home-link').addEventListener('click', function(event) {
    menu.classList.add("disabled");
    document.querySelector('#header').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.querySelector('#skills-link').addEventListener('click', function(event) {
    menu.classList.add("disabled");
    document.querySelector('#skills').scrollIntoView({
      behavior: 'smooth'
    });
  });
