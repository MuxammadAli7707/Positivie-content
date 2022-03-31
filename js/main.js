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

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const elBtn = document.querySelectorAll(".text");
  object.forEach((item, index) =>{
    if(item.id == elInput.value){
      elBtn[index].classList.add("active");
      let result = document.getElementById("content");
      result.textContent = `${item.name}`;
    }else {
      elBtn[index].classList.remove("active");
    }
  })
  elInput.value = "";
})
