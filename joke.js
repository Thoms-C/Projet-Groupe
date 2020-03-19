/*faire apparaitre et disparaitre des blagues*/
/* joke dave*/
const dave = document.getElementById("dave2");
dave.addEventListener('click',() =>{
  const survol = document.getElementById ('survol2').style.display = 'flex';
  document.getElementById ('survol2').style.backgroundColor = '#ff0198';
  })

  const bouton=  document.getElementById('bouton');
bouton.addEventListener('click',() =>{
  const survol = document.getElementById ('survol2').style.display = 'none';
})

/*joke data*/
const data = document.getElementById("data2");
data.addEventListener('click',() =>{
  const survol3 = document.getElementById ('survol3').style.display = 'flex';
  document.getElementById ('survol3').style.backgroundColor = '#ff0198';
  })

carambar2.addEventListener('click',() =>{
  const survol3 = document.getElementById ('survol3').style.display = 'none';
})
/*joke perdue*/
const perdue = document.getElementById("perdu2");
perdue.addEventListener('click',() =>{
  const survol3 = document.getElementById ('survol4').style.display = 'flex';
  document.getElementById ('survol4').style.backgroundColor = '#ff0198';
  })

carambar2.addEventListener('click',() =>{
  const survol4 = document.getElementById ('survol4').style.display = 'none';
})

