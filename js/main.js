const object = [
  {
    id: 1,
    name: 'Positive'
  },
  {
    id: 2,
    name: 'Negative',
  },
  {
    id: 3,
    name: 'Neutral',
  }
];

const form = document.getElementById("form");
const elInput = document.getElementById("input");
const result = document.getElementById("result");
const Positive = document.getElementById("positive");
const elBtn = document.querySelectorAll(".text");

form.addEventListener("submit", (e)=>{
  textone.textContent = "";
  texttwo.textContent = "";
  textthree.textContent = "";
  e.preventDefault();
  object.forEach((item, index) =>{
    if(item.id == elInput.value){
      elBtn[index].classList.add("active");
      let result = document.getElementById("content");
      result.textContent = `${item.name}`;
    }else {
      elBtn[index].classList.remove("active");
    }
    if(elInput.value > 3){
      alert("Wrong number");
    }
  });
  elInput.value = "";
});

let textone = document.createElement('span');
let texttwo = document.createElement('span');
let textthree = document.createElement('span');
let box = document.getElementById('box');
textone.textContent = "Positive";
texttwo.textContent = "Negative";
textthree.textContent = "Neutral";


elBtn[0].addEventListener("click", () =>{
  box.appendChild(textone);
  texttwo.remove();
  textthree.remove();
});
elBtn[1].addEventListener("click", () =>{
  box.appendChild(texttwo);
  textone.remove();
  textthree.remove();
});

elBtn[2].addEventListener("click", () =>{
  box.appendChild(textthree);
  texttwo.remove();
  textone.remove();
});  