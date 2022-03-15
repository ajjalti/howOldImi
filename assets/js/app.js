import {testDate,testStructureDate} from './testDate.js';
let button = document.getElementById('button');
button.addEventListener('click',function(){
let date = document.getElementById('date').value;
var age = date.split('-').reverse().join('-');
console.log(age);
if(testStructureDate(age)){
        let day= new Date();
        day = (day.getDay()+13).toString().padStart(2,0)+'-'+day.getMonth().toString().padStart(2,0)+'-'+day.getFullYear().toString().padStart(4,0);
        let alert = document.getElementById('alert');
        alert.textContent=`votre age est ${day}`;
    }
})