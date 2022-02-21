var agora = new Date()
var hr = agora.getHours()
var min = agora.getMinutes()

console.log(`Agora são exatamente ${hr}:${min} horas.`)
if (hr > 18 && hr <= 23 ){
    console.log('Boa Noite!')
} else if (hr < 12 && hr > 5){
    console.log('Bom Dia!')
} else if(hr > 0 && hr < 6){
    console.log('Boa Madrugada!')
} else{
    console.log('Boa Tarde')
}