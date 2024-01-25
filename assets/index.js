var horas = new Date().getHours();
var minutos = new Date().getMinutes();

if(horas < 10){
  horas = `0${horas}`
}
if(minutos < 10){
  minutos = `0${minutos}`
}
var textoHoras = document.getElementById('horaDia')
var imgHoras = document.getElementById('imgDia')
if(horas >= 6 && horas < 12) {
  textoHoras.innerHTML = `<h3>Agora são ${horas}:${minutos} da manhã</h3>`
  imgHoras.innerHTML = `<img src="https://img.freepik.com/fotos-premium/cafe-e-sanduiche-de-manha-na-vista-para-a-montanha_34237-226.jpg"></img>`
  document.getElementsByTagName('body').style.backgroundColor = '#dfeb59';
}else if(horas >= 12 && horas < 18) {
  textoHoras.innerHTML = `<h3>Agora são ${horas}:${minutos} da tarde</h3>`
  imgHoras.innerHTML = `<img src="https://cdn.pixabay.com/photo/2018/08/09/22/18/sun-3595654_1280.jpg></img>`
}else if(horas >= 18) {
    textoHoras.innerHTML = `<h3>Agora são ${horas}:${minutos} da noite</h3>`
    imgHoras.innerHTML = `<img src="https://a.cdn-hotels.com/gdcs/production188/d1375/ff7efa35-751d-4766-ae6c-39a27dec1f8e.jpg?impolicy=fcrop&w=800&h=533&q=medium"></img>`
}