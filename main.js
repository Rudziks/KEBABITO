const send = new Array

function wyslij() {
    const imie = document.getElementById("fname").value
    const nazwisko = document.getElementById("sname").value
    const mail = document.getElementById("em").value
    const ulica = document.getElementById("ad").value
    const tel = document.getElementById("tl").value
    const wiadomosc = document.getElementById("ms").value

    if(imie.length < 3){
        document.getElementById('imie-error').style = 'visibility: visible'
    }else{
        FormData.push(imie)
        document.getElementById('imie-error').style = 'visibility: hidden'
    }
    if(nazwisko.length < 3){
        document.getElementById('nazwisko-error').style = 'visibility: visible'
    }else{
        FormData.push(nazwisko)
        document.getElementById('imie-error').style = 'visibility: hidden'
    }
    if(mail.indexOf('@')> -1){
        send.push(mail)
        console.log(send)
    }else{
        alert('Wypełnij pole "E-MAIL" poprawnie')
    }
    if(ulica.length > 3){
        send.push(mail)
        console.log(send)
    }else{
        alert('Wypełnij pole "ULICA" poprawnie')
    }
    if(tel.indexOf('1','2','3','4','5','6','7','8','9','0')){
        send.push(tel)
        console.log(send)
    }else{
        alert('Wypełnij pole "TELEFON" poprawnie')
    }
    if(wiadomosc.length > 10){
        send.push(wiadomosc)
        console.log(send)
    }else{
        alert('Wypełnij pole "WIADOMOŚĆ" poprawnie')
    }
}



function xd(){
    const wybor = document.getElementById('wybór')
    console.log(wybor)
}
