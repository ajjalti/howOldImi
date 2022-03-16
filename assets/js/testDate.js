// fonction pour valider la date:
function testDate(j,m,a){
    if(j>=1 && j<=31 && m>=1 && m<=12 && a>=1){
        let m1 = [1,3,5,7,8,10,12];
        let m2 = [4,6,9,11];
        let test = false;
        if(m in m1){
            if(j<=31){
                test=true;
            }
        }
        if(m in m2){
            if(j<=30){
                test=true;
            }
        }
        if(m==2){
            if(!a%4 && j<=29){
                test=true;
            }
            if(a%4 && j<=28){
                test=true;
            }
        }
        return test;
    }
    return false;
}

// fonction pour tester le format de la date  
function testStructureDate(date){
    var char = "/,;:?-_&@# \\+=";
    var s;
    for (let i of date){
        for (let j of char){
            if(i==j){
                s=date.split(i);
                if(s.length>3){
                  return 0;
                }
            }
        }
    }
      for (let i of s){
          var res=false;
          if(typeof(parseInt(i))=="number"){
            res=true;
          }
      }
      if(res==true){
        if(!isNaN(s[0]) && !isNaN(s[1]) && !isNaN(s[2])){
        return testDate(parseInt(s[0]),parseInt(s[1]),parseInt(s[2]));
          }return false;
      }
}
//function pour calculer l'age a partir de la date de naissance :
function Age(dateN,date){
    let data=[];
   let array1 = dateN.split('-');
    let array2 = date.split('-');
      for (let i=0;i<3;i++){
        data.push(parseInt(array2[i])-parseInt(array1[i]));
      }
    let day = data[0];
    let month = data[1];
    let year = data[2];
    return prossess(day,month,year);
}

// function prossess :
function prossess(day,month,year){
    if(day<0 &&(month==1 || month==3 ||month==5 || month==7||month==8||month==10||month==12)){
        day=30+day;
        month-=1;
    }
    if(day<0 &&(month==4||month==6||month==9||month==11)){
        day=31+day;
        month-=1;
    }
    if(day<0 && month==2 && year%4==0){
        day=29+day;
        month-=1;
    }
    if(day<0 && month==2 && year%4!=0){
        day=28+day;
        month-=1;
    }
    if((month==1 || month==3 ||month==5 || month==7||month==8||month==10||month==12)&&day>31){
        day-=31;
        month+=1;
    }
    if((month==4||month==6||month==9||month==11)&&day>30){
        day-=30;
        month=+1;
    }
    if(day>29 && month==2 &&year%4==0){
        day-=29;
        month+=1;
    }
    if(day>28 && month==2 &&year%4!=0){
        day-=28;
        month+=1;
    }
    if(month>12){
        month-=12;
        year+=1;
    }
    if(month<=0){
        month=12+month;
        year-=1;
    }
    if(day>=0 && month>=0 &&year>=0){
        return [day,month,year];
    }
    else{
        return prossess(day,month,year);
    }

}
export{testDate,testStructureDate,Age,prossess};
  