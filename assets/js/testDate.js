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

export{testDate,testStructureDate};
  