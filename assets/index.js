function carregar(){
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
  imgHoras.innerHTML = `<img src="https://img.freepik.com/fotos-gratis/praia-tropical_74190-188.jpg?w=1060&t=st=1706226759~exp=1706227359~hmac=9f0f21c7963744ae67908bb3de9547a0fa6b05df122b4e0a2be54a477d73975b">`
 document.body.style.background = "red";
}else if(horas >= 12 && horas < 18) {
  textoHoras.innerHTML = `<h3>Agora são ${horas}:${minutos} da tarde</h3>`
  imgHoras.innerHTML = `<img src="https://img.freepik.com/fotos-gratis/foto-de-baixo-angulo-das-nuvens-no-ceu-colorido-capturada-no-crepusculo_181624-29111.jpg?w=1060&t=st=1706226818~exp=1706227418~hmac=c9533d56b93c039bf0b4b03d6df6acb13f0e4455817a5856659846354cd423b8">`
}else if(horas >= 18) {
    textoHoras.innerHTML = `<h3>Agora são ${horas}:${minutos} da noite</h3>`
    imgHoras.innerHTML = `<img src="https://img.freepik.com/vetores-gratis/cena-do-ceu-noturno-com-nuvens-lua-e-estrelas_1017-33781.jpg?w=1060&t=st=1706226864~exp=1706227464~hmac=4d821a0b5341e8471ea0eca4be9ff76d451a969a4a5ab8668631e25729597651">`
}
}