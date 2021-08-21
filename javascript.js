let teclas = document.getElementsByClassName("teclado");
let letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  let arrayLetras = [];
  arrayLetras = letras.split("");
  
  let divLetras = "";
  arrayLetras.forEach((element)=>{
  console.log(element)
  const boton = document.createElement("button");
  boton.classList.add('tecla')
  boton.textContent = element
  boton.onclick=presiona_letra
  if (element==" "){
      boton.disabled=true;
  }
  const app = document.querySelector(".teclado"); // <div id="app">App</div>
  app.appendChild(boton)
  
  })



palabras = 'hormiga babuino tejon murcielago oso castor camello gato almeja cobra pantera coyote cuervo ciervo perro burro pato aguila huron zorro rana cabra ganso halcon leon lagarto llama topo mono alce raton mula salamandra nutria buho panda loro paloma piton conejo carnero rata cuervo rinoceronte salmon foca tiburon oveja mofeta perezoso serpiente araña cigüeña cisne tigre sapo trucha pavo tortuga comadreja ballena lobo wombat cebra'.split(" ")
var letras_adivinadas=0
var fallos=0
aleatorio=Math.floor(Math.random() * (palabras.length + 1))
palabra= palabras[aleatorio]


var palabra=palabra.toUpperCase()
            
const flipCardContainer = document.createElement('div');
flipCardContainer.className = 'flip-card-container';
const app = document.querySelector("aside"); // <div id="app">App</div>
app.appendChild(flipCardContainer)
let numero=0 
arrayPalabras = palabra.split("");
arrayPalabras.forEach((element)=>{
  console.log(element)
  
// We are creating nested div so we can use preserve-3d.
const flipCard = document.createElement('div');
flipCard.className = 'flip-card';
flipCard.id=numero;
flipCardContainer.appendChild(flipCard);
 
const cardFront = document.createElement('div');
const cardBack = document.createElement('div');
cardFront.className = 'card-front';
cardFront.texcontent="?";

numero=numero+1
cardBack.className = 'card-back';

flipCard.appendChild(cardFront);
flipCard.appendChild(cardBack);
const frontTextContent = document.createTextNode('?');
const backTextContent = document.createTextNode(element);
cardFront.appendChild(frontTextContent);
cardBack.appendChild(backTextContent);
  })

 
const canvas = document.getElementById('hangman');
const context = canvas.getContext("2d");

        context.strokeStyle = '#444';
        context.lineWidth = 10; 
        context.beginPath();
        context.moveTo(175, 225);
        context.lineTo(5, 225);
        context.moveTo(40, 225);
        context.lineTo(25, 5);
        context.lineTo(100, 5);
        context.lineTo(100, 25);
        context.stroke();

       
      
function presiona_letra()
{
    console.log("Aprieto")
    letra=this.textContent//obtiene letra
    busca_letra(letra)
    this.disabled=true;
    
}

function delay(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}
 async function myAsyncFunction(n){
     
     await delay(2);
     window.location.href = '#openModalw'
    
}






function busca_letra(letra)
{
    if (palabra.includes(letra)){
        for (let i=0; i<palabra.length; i++)
           {if (letra==palabra[i])
             {cartita=document.getElementById(i.toString())
              cartita.style.transform = 'rotateY(180deg)'
              letras_adivinadas+=1;
              if (letras_adivinadas==palabra.length)
                  {
                  myAsyncFunction(2)
                     
                  }
            }  

      }
   }
    else{ 
        fallos+=1;
        dibuja(fallos);
        if (fallos==6)
            {
                const textito = document.getElementById("perdiste");
                textito.innerHTML = "La palabra era "+palabra
                
                window.location.href = '#openModall'
                  }
}
}

function dibuja(fallos){
const canvas = document.getElementById('hangman');
const context = canvas.getContext("2d");
switch (fallos) {
    case 1:    
        context.lineWidth = 5;
        context.beginPath();
        context.arc(100, 50, 25, 0, Math.PI*2, true);
        context.closePath();
        context.stroke();
        break;
    case 2:    
        context.beginPath();
        context.moveTo(100, 75);
        context.lineTo(100, 140);
        context.stroke();
        break;
    case 3:    
        context.beginPath();
        context.moveTo(100, 85);
        context.lineTo(60, 100);
        context.stroke();
        break;
    case 4:    
        context.beginPath();
        context.moveTo(100, 85);
        context.lineTo(140, 100);
        context.stroke();
        break;
    case 5:
        context.beginPath();
        context.moveTo(100, 140);
        context.lineTo(80, 190);
        context.stroke();
        
         context.beginPath();
         context.moveTo(82, 190);
         context.lineTo(70, 185);
         context.stroke();
        break;
    case 6:    
      
        context.beginPath();
        context.moveTo(100, 140);
        context.lineTo(125, 190);
        context.stroke();
           
    
         context.beginPath();
         context.moveTo(122, 190);
         context.lineTo(135, 185);
         context.stroke();
        break;
}
}