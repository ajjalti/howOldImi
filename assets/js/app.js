import {testDate,testStructureDate,Age,prossess} from './testDate.js';
let button = document.getElementById('button');
button.addEventListener('click',function(){
        let dateNaiss = document.getElementById('date').value;
        var datenais=dateNaiss.split('-').reverse();
        var dateNaissR = datenais.join('-');
        var dayNaiss = new Date(dateNaiss);
        var days=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
        if(testStructureDate(dateNaissR)){
            var day= new Date();
            day = (day.getDate()+1).toString().padStart(2,0)+'-'+(day.getMonth()+1).toString().padStart(2,0)+'-'+day.getFullYear().toString().padStart(4,0);
            // partie du calcul de l'age :
            let res = Age(dateNaissR,day);
            const alert = document.getElementById('alert');
            alert.classList.remove('visually-hidden');
            alert.innerHTML=`aah je vois vous avez  <h4 class="text-danger d-inline">${res[2]}</h4> années et <h4 class="text-danger d-inline">${res[1]}</h4> mois et presque <h4 class="text-danger d-inline">${res[0]}</h4> jours 
            &#128513; <br> et vous êtes née en <h4 class="text-warning d-inline font-weight-bold">${days[dayNaiss.getDay()]}</h4> &#128512;`;
        }
        //joyeux anniversaire
        const d = new Date();
        const aniv = document.getElementById("aniv");
        if((d.getDate())==datenais[0] && (d.getMonth()+1)==datenais[1]){
                console.log("ok");
                aniv.classList.remove('visually-hidden');
                aniv.innerHTML=`<h4>joyeux anniversire &#128525</h4>`;
                let inp = document.getElementById('date');
                inp.addEventListener('focus',function(){
                    let aniv = document.getElementById("aniv");
                    aniv.classList.add('visually-hidden');

                })
            }
})
// reset  -  event:
let alert = document.getElementById('alert');
let inp = document.getElementById('date');
inp.addEventListener('focus',function(){
    alert.classList.add("visually-hidden"); 
})

