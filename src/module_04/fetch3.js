/*Fetch API*/
/*blob() binary long object*/

const buttonImg = document.getElementById("button-img");
const buttonPDF = document.getElementById("button-pdf");

const header = new Headers({
    'Access-Control-Allow-Origin':'*',
    'Content-Type': 'multipart/form-data'
})

buttonImg.addEventListener("click", () => {
  console.log("Aqui", window.location.origin);
  fetch('mario.jpg', {
    mode: 'no-cors',
    header,
  })
    .then(res => res.blob())
    .then(img => {
      document.querySelector("img").src = URL.createObjectURL(img);
    });
});
