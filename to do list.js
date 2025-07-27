let divinsert = document.getElementsByClassName("insertion");
let inputinser = document.getElementById("inputinsertion");
let btninser = document.getElementById("Ajouter");
let ul = document.getElementById("listul");

const emojiPicker = document.querySelector("emoji-picker");

  emojiPicker.addEventListener("emoji-click", function(){
  const emoji = event.detail.emoji.unicode;
  inputinser.value = emoji + inputinser.value;
    emojiPicker.style.display = 'none';
});

function inser() {
  let li = document.createElement("li");
  li.style.display = "flex";
  li.style.justifyContent= "space-between",
  li.style.width="100%"
  li.style.padding = "0 0";
  li.style.boxSizing="border-box";
  li.style.borderBottom="1px solid gray";
  li.style.minWidth= "0";

let emoji = inputinser.value.charAt(0);
  
  
  let bntdone=document.createElement("button");
  bntdone.style.border = "none";
  bntdone.style.background = "none";
  bntdone.style.display = "list-item";



 bntdone.textContent = emoji + inputinser.value.slice(1);

   li.appendChild(bntdone);

  bntdone.addEventListener("click", function () {
    this.style.textDecoration = "line-through";
    this.style.color="gray";
    this.style.color = "gray";
   this.style.border="none"
  });

 let btnsuprimme = document.createElement("button");
  btnsuprimme.textContent = " 🗑 ";
  btnsuprimme.style.marginLeft = "20%";
  btnsuprimme.style.border="none";
  btnsuprimme.style.backgroundColor="none";
  
  btnsuprimme.addEventListener("click", function () {
    ul.removeChild(li);})

li.appendChild(btnsuprimme);
ul.appendChild(li);
inputinser.value = "";
emojiPicker.style.display = 'block';
}

btninser.addEventListener("click", inser);




