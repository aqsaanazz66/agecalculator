function change(){
    var age =document.getElementById('age').nodeValue;
    document.getElementById('months'.value=(age*12)+"months")
    document.getElementById('months'.value=(age*12*30)+"days")
    document.getElementById('months'.value=(age*12*30*24)+"hours")
    document.getElementById('months'.value=(age*12*30*24*60)+"minutes")
    document.getElementById('months'.value=(age*12*30*24*60*60)+"seconds")
console.log()
}