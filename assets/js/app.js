import {testDate,testStructureDate,Age,prossess} from './testDate.js';
let button = document.getElementById('button');
button.addEventListener('click',function(){
        let dateNaiss = document.getElementById('date').value;
        var dateNaissR = dateNaiss.split('-').reverse().join('-');
        var dayNaiss = new Date(dateNaiss);
        var days=["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
        if(testStructureDate(dateNaissR)){
            let day= new Date();
            day = (day.getDate()+1).toString().padStart(2,0)+'-'+(day.getMonth()+1).toString().padStart(2,0)+'-'+day.getFullYear().toString().padStart(4,0);
            // partie du calcul de l'age :
            let res = Age(dateNaissR,day);
            const alert = document.getElementById('alert');
            alert.classList.remove('visually-hidden');
            alert.innerHTML=`aah je vois vous avez  <h4 class="text-danger d-inline">${res[2]}</h4> années et <h4 class="text-danger d-inline">${res[1]}</h4> mois et presque <h4 class="text-danger d-inline">${res[0]}</h4> jours 
            &#128513; <br> et vous êtes née en <h4 class="text-warning d-inline font-weight-bold">${days[dayNaiss.getDay()]}</h4> &#128512;`;
            }
})
// reset  -  event:
let alert = document.getElementById('alert');
let inp = document.getElementById('date');
inp.addEventListener('focus',function(){
    alert.classList.add("visually-hidden");  
})

