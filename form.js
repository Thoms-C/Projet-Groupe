// open popup
document.getElementById('connect').addEventListener('click',() =>{
    const openPopup = document.getElementById('bg').style.display = 'flex';
});

document.getElementById('bg_h2_inscrp').addEventListener('click', ()=>{
    const BgRegisterTitleBlack = document.getElementById('bg_h2_inscrp').style.background = 'var(--grey_color)';
    const BgLogTitleWhite = document.getElementById('bg_h2_conn').style.background = 'white';
    const hideLogForm = document.getElementById('connexion_form').style.display = 'none';
    const PutRegisterForm = document.getElementById('inscription_form').style.display = 'flex';
    const HideCursorInRegister = document.getElementById('bg_h2_inscrp').style.cursor = 'auto';
    const PutCursorInLog = document.getElementById('bg_h2_conn').style.cursor = 'pointer';
});

document.getElementById('bg_h2_conn').addEventListener('click', ()=>{
    const BgLogTitleBlack = document.getElementById('bg_h2_conn').style.background = 'var(--grey_color)';
    const BgRegisterTitleWhite = document.getElementById('bg_h2_inscrp').style.background = 'white';
    const hideRegisterForm = document.getElementById('inscription_form').style.display = 'none';
    const PutLogForm = document.getElementById('connexion_form').style.display = 'flex';
    const HideCursorInLog = document.getElementById('bg_h2_conn').style.cursor = 'auto';
    const PutCursorInRegister = document.getElementById('bg_h2_inscrp').style.cursor = 'pointer';
});
//close popup
document.getElementById('close_register').addEventListener('click',() =>{
    const closePopup = document.getElementById('bg').style.display = 'none';
});

document.getElementById('close_log').addEventListener('click',() =>{
    const closePopup = document.getElementById('bg').style.display = 'none';
});


/*menu burger responsive*/
const btn = document.getElementById("burger"); /*appelle le bouton*/
let burgerOpen = false

/*si burgerOpen faux, ouvre le burger, puis change en burgerOpen vrai donc clic suivant, ferme*/
btn.addEventListener('click',() =>{
  if (burgerOpen=== false){
  const ouvreToi= document.getElementById ('ouvre').style.display = 'block';}
  else {document.getElementById ('ouvre').style.display = 'none'; }
    burgerOpen =! burgerOpen
})


// msg error
const submit = document.getElementById('submit')

submit.addEventListener("click", (evt)=>{
    evt.preventDefault();
    //Insert other awesome code here
  })
//msg_erreur.textcontent =  'Rempli bien tous les champs obligatoires (*)';

submit.addEventListener('click',() =>{
    if(submit.valueMissing){
        submit.preventDefault();
    }
});

