"use strict";
var link = document.querySelector(".search-btn");

    var popup = document.querySelector(".modal-form");
    var close = popup.querySelector(".modal-form-hide");

    link.addEventListener("click", function (event) {
      event.preventDefault();
      popup.classList.add("modal-form-hide");
    });
        
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("modal-form-hide")) {
            popup.classList.remove("modal-form-hide");
          }
        }
      });