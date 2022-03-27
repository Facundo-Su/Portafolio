const icono = document.querySelector('.iconos')
const menu =document.querySelector('.menu__navegacion')

icono.addEventListener('click',()=>{
    menu.classList.toggle("menu_mostrar")
})

window.addEventListener('click',(e)=>{
    if(menu.classList.contains("menu_mostrar") && e.target!= menu && e.target != icono){
        menu.classList.toggle("menu_mostrar")
    }
})



let slider =document.querySelector('.slider-contenedor')
let sliderindividual= document.querySelectorAll(".contenidos-slider");
let contador=1;
let width = sliderindividual[0].clientWidth;
let intervalo =5000;
console.log(contador)

window.addEventListener("resize",()=>{
    width =sliderindividual[0].clientWidth;
})


setInterval(function(){
    slides();
},intervalo)

function slides(){
    slider.style.transform ="translate("+(-width*contador) +"px)";
    slider.style.transition="transform 0.3s"
    contador++;

    if(contador == sliderindividual.length+1){
        setTimeout(function(){

            slider.style.transform ="translate(0px)";
            slider.style.transition="transform 0.3s"
            contador=1;
        })
    }
}
