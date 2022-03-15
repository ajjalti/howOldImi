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
            alert.textContent=`aah je vois vous avez  ${res[2]} années et ${res[1]} mois et presque ${res[0]} jours ;)`;
        }
})
let input = document.getElementById("date");
input.addEventListener('focus',function(){
    alert.classList.add("visually-hidden");

});