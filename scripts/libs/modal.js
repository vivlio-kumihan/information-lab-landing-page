"use strict";

class Modal {
  constructor() {
    this.btn = document.querySelector(".modal-btn");
    console.log(this.btn);
    this.modal = document.querySelector(".modal__inner");
    this.toggle = document.querySelector(".modal__toggle-btn");
    this._init();
  }

  _init() {
    this.btn.addEventListener("click", (e) => {
      const target = e.target.closest(".modal-btn");
      const dataName = target.dataset.name;
      console.log(dataName);
      if (this.modal.classList.contains(dataName)) {
        this.modal.classList.add("active");
        this.toggle.classList.add("active");
      }
    });
    
    this.toggle.addEventListener("click", (e) => {
      console.log(e.target.value);
      console.log(this.modal);
      if (this.modal.classList.contains(e.target.value)) {
        this.modal.classList.remove("active");
        this.toggle.classList.remove("active");
      } 
    })
  }
}