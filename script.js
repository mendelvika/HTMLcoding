//show mobile-menu
let nav = document.querySelector(".menu");
let burger = document.querySelector(".burger");
let personalButton = document.querySelector(".personal");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("visible");
  personalButton.classList.toggle("visible");
});

//show dropdown select visa
let selectSend = document.querySelector(".select-send p");
let dropMenu = document.querySelector(".dropdown");
let dropItem = document.querySelectorAll(".dropdown p");
selectSend.addEventListener("click", () => {
  if (dropMenu.style.display == "none") {
    dropMenu.style.display = "block";
  } else {
    dropMenu.style.display = "none";
  }
});

//change items on click on exchange options
let selectReceive = document.querySelector(".select-receive p");
let sendImg = document.querySelector(".select-send span");
let receiveImg = document.querySelector(".select-receive span");
let exchangeBlocks = document.querySelector(".exchange-blocks");
let visaBlock = document.querySelector(".visa-block");
let etheriumBlock = document.querySelector(".etherium-block");
let advcashBlock = document.querySelector(".advcash-block");

exchangeBlocks.addEventListener("click", e => {
  selectSend.textContent = "Bitcoin";
  sendImg.style.backgroundImage = "url(images/bitcoin.png)";
  if (visaBlock.contains(e.target)) {
    receiveImg.style.backgroundImage = "url(images/card.png)";
    selectReceive.textContent = "Visa/Mastercard UAH";
  } else if (etheriumBlock.contains(e.target)) {
    receiveImg.style.backgroundImage = "url(images/etherium.png)";
    selectReceive.textContent = "Etherium";
  } else if (advcashBlock.contains(e.target)) {
    receiveImg.style.backgroundImage = "url(images/advcash.png)";
    selectReceive.textContent = "Advcash";
  }
});

//change item in dropdown menu
document.addEventListener("click", e => {
  if (dropMenu.contains(e.target)) {
    sendImg.style.backgroundImage = "url(images/card.png)";
    if (dropItem[0].contains(e.target)) {
      selectSend.textContent = dropItem[0].textContent;
      dropMenu.style.display = "none";
    } else if (dropItem[1].contains(e.target)) {
      selectSend.innerHTML = dropItem[1].textContent;
      dropMenu.style.display = "none";
    } else if (dropItem[2].contains(e.target)) {
      selectSend.innerHTML = dropItem[2].textContent;
      dropMenu.style.display = "none";
    }
  }
});
