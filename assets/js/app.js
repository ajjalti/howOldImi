import {testDate,testStructureDate,Age,prossess} from './testDate.js';
let button = document.getElementById('button');
button.addEventListener('click',function(){
        let date = document.getElementById('date').value;
        var age = date.split('-').reverse().join('-');
        if(testStructureDate(age)){
            let day= new Date();
            day = (day.getDay()+13).toString().padStart(2,0)+'-'+day.getMonth().toString().padStart(2,0)+'-'+day.getFullYear().toString().padStart(4,0);
            // partie du calcul de l'age :
            let res = Age(age,day);
            let alert = document.getElementById('alert');
            alert.classList.remove('visually-hidden');
            alert.innerHTML=`aah je vois vous avez  <h4 class="text-danger d-inline">${res[2]}</h4> années et <h4 class="text-danger d-inline">${res[1]+1}</h4> mois et presque <h4 class="text-danger d-inline">${res[0]}</h4> jours ;)`;
        }
})
// reset  -  event:
let alert = document.getElementById('alert');
let inp = document.getElementById('date');
inp.addEventListener('focus',function(){
    alert.classList.add("visually-hidden");  
})

