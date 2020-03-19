/*faire apparaitre et disparaitre des blagues*/
/* joke dave*/
const dave = document.getElementById("dave2");
dave.addEventListener('click',() =>{
  const survol = document.getElementById ('survol2').style.display = 'flex';
  })

  const bouton=  document.getElementById('bouton');
bouton.addEventListener('click',() =>{
  document.getElementById ('survol2').style.display = 'none';
})

/*joke data*/
const data = document.getElementById("data2");
data.addEventListener('click',() =>{
  const survol3 = document.getElementById ('survol3').style.display = 'flex';
  })

  const bouton2=  document.getElementById('bouton2');
bouton2.addEventListener('click',() =>{
  document.getElementById ('survol3').style.display = 'none';
})
/*joke perdue*/
const perdue = document.getElementById("perdu2");
perdue.addEventListener('click',() =>{
  const survol3 = document.getElementById ('survol4').style.display = 'flex';
  })

  const bouton3=  document.getElementById('bouton3');
  bouton3.addEventListener('click',() =>{
    document.getElementById ('survol4').style.display = 'none';
})

