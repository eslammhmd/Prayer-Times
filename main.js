

let boxs =document.getElementById('select-city');

const cities =["Cairo","Alexandria"," Aswan","Beheira" ,"Suez"," North Sinai","Gharbia" ,"Port Said" ,"Monufia" ," Ismailia"];


// -----------------------------fill options-------------------------------------------------
function filloption(){

    boxs.innerHTML ="";
    for(let city of cities){
    let content = `
    <option class="option" vlaue ="${city}">${city}</option>
    `
    boxs.innerHTML +=content;
}
}
filloption()

// -----------------------------select event-------------------------------------------

function selectmyItem(){
boxs.addEventListener('change' , ()=>{
    getTimeWithAdrress(boxs.value)
})
}
selectmyItem()


// ---------------------------------------speak with api--------------------------------------------------------

function getTimeWithAdrress(e){
fetch('http://api.aladhan.com/v1/timingsByCity?country=EG&city= '+e)
.then((response) =>{
    if(response.ok){   
        return  response.json()   // all time
    }
})
.then((city) =>{   
let time =city.data.timings;
fillPrayer("fajr" ,time.Fajr);
fillPrayer("dhuhr" ,time.Dhuhr);
fillPrayer("asr" ,time.Asr);
fillPrayer("maghrib" ,time.Maghrib);
fillPrayer("isha" ,time.Isha);
document.querySelector('.local-date').innerHTML = city.data.date.readable;
})
}
getTimeWithAdrress(cities[0])



































function fillPrayer(id,val){
    document.getElementById(id).innerHTML =val
}