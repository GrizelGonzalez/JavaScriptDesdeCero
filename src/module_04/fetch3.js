/*Fetch API*/
/*blob() binary long object*/

const buttonImg = document.getElementById("button-img");
const buttonPDF = document.getElementById("button-pdf");

buttonImg.addEventListener("click", () => {
  fetch("mario.jpg", {})
    .then((res) => res.blob())
    .then((img) => {
      document.querySelector("img").src = URL.createObjectURL(img);
    });
});
