/*Fetch API*/
/*blob() binary long object*/

const buttonImg = document.getElementById("button-img");
const buttonPDF = document.getElementById("button-pdf");

buttonImg.addEventListener("click", () => {
  fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png", {})
    .then((res) => res.blob())
    .then((img) => {
      document.querySelector("img").src = URL.createObjectURL(img);
    });
});
