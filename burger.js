
const btn = document.getElementById("burger"); /*appelle le bouton*/
let burgerOpen = false

/*si burgerOpen faux, ouvre le burger, puis change en burgerOpen vrai donc clic suivant, ferme*/
btn.addEventListener('click',() =>{
  if (burgerOpen=== false){
  const ouvreToi= document.getElementById ('ouvre').style.display = 'block';}
  else {document.getElementById ('ouvre').style.display = 'none'; }
    burgerOpen =! burgerOpen
})

 