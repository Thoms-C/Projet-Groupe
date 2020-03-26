// open popup
document.getElementById('connect').addEventListener('click',() =>{
    const openPopup = document.getElementById('bg').style.display = 'flex';
});


/*document.getElementById('BoutonQuiFerme').addEventListener('click',() =>{
    const ClosePopup = document.getElementById('Popup').style.display = 'none';
});
*/
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



// Forulaire de contact 

const ptcButton = document.getElementById('ptc');

ptcButton.addEventListener('click',() => {
    const showContactForm = document.getElementById('contactUs').style.display = "flex"
})