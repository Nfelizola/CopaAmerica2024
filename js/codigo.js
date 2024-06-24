// variaveis globais - carga de todas as selecoes
// primeiro teste apenas grupo A
// mas dveremos cadastrar todas as selecoes conforme exemplo...
let timea = [
    { nome: "Argentina", ranking: 1843.73, forca: 0 },
    { nome: "Chile", ranking: 1512.82, forca: 0 },
    { nome: "Peru", ranking: 1553.23, forca: 0 },
    { nome: "Canada", ranking: 1444.44,forca: 0},
];
let timeb = [
    { nome: "Equador", ranking: 1502.85, forca: 0 },
    { nome: "Jamaica", ranking: 1435.33, forca: 0 },
    { nome: "México", ranking: 1635.73, forca: 0 },
    { nome: "Venezuela", ranking: 1442.29,forca: 0},
];
let timec = [
    { nome: "Bolívia", ranking: 1283.88, forca: 0 },
    { nome: "Est. Unidos", ranking: 1655.54, forca: 0 },
    { nome: "Panamá", ranking: 1482.10, forca: 0 },
    { nome: "Uruguai", ranking: 1637.55,forca: 0},
];
let timed = [
    { nome: "Brasil", ranking: 1795.13, forca: 0 },
    { nome: "Colômbia", ranking: 1612.78, forca: 0 },
    { nome: "C. Rica", ranking: 1440.77, forca: 0 },
    { nome: "Paraguai", ranking: 1430.73,forca: 0},
];
let alvo=[];
let times = timea.concat(timeb,timec,timed);

let gola=0;
let golb=0;
// começando o menor ranking bem alto para ir procurando o menor
let menor=2000;
let timer;
let idpartida;
// encontrar menor ranking
times.forEach(rmenor);
// gerar força baseado no fator 553.16
times.forEach(criarforca);

// em seguida ao carregar pagina criar as partidas conforme o title da página do grupo
document.addEventListener('DOMContentLoaded', function() {
    // Exemplo de manipulação do DOM
    // iremos criar tofas as 
// pegar o elemento referente ao grupoa pgrupoa
let  Elemento = document.getElementById("grupoa");
     
if (document.title=="grupoa"){
     alvo=timea;
     criarpartidas(alvo,Elemento);
  }
  if (document.title=="grupob"){
     alvo=timeb;
     criarpartidas(alvo,Elemento);
  }
  if (document.title=="grupoc"){
     alvo=timec;
     criarpartidas(alvo,Elemento);
  }
  if (document.title=="grupod"){
     alvo=timed;
     criarpartidas(alvo,Elemento);
  }

   
    });


function rmenor(item,index){
   // se ranking do item atual e menor do que o menor..
   // então ele se torna o novo menor
    if (item.ranking<menor){
    menor=item.ranking;
  } 
}

function criarforca(item,index) {
    // usar o valor de menor para estabelecer forca de cada equipe
    item.forca= item.ranking/ menor;
    // o pior time terá força 1 e o restante de 1 em diante
}

// receberá a e b, sendo a e b os indices dos times na matriz de times
function partida(a,b,e) {
    // criar matriz chamada minuto,lance
    // colocar os lances aqui para serem exibidos conforme cronometro for avançando
    let mgol="x";
    // cada oportunidade bem aproveitada resulta em Gol
   let botao=document.getElementById(e);
   botao.setAttribute("disabled", true);
   console.clear();
   console.log(e);
   if (e=="start1"){
      timer="timer1";
      idpartida="p1";
    };
   if (e=="start2"){
    timer="timer2";
    idpartida="p2";
  };
  if (e=="start3"){
    timer="timer3";
    idpartida="p3";
  };
  if (e=="start4"){
    timer="timer4";
    idpartida="p4";
  };
  if (e=="start5"){
    timer="timer5";
    idpartida="p5";
  };
  if (e=="start6"){
    timer="timer6";
    idpartida="p6";
  };
  
  
   startAcceleratedTimer(90, 2,a,b);
  //gola=0;
  //golb=0;
  
};

// rolar dados
function D(faces){
    dado =  Math.ceil(Math.random()*faces);
    //console.log ("D("+faces+") rolou um ==>"+ dado);
    return dado; 
}

function criarpartidas(t,e){
    // montar a pagina atraves da manipulação do DOM
    // criar as combinações possíveis dentro do grupo 0,1  0,2  0,3 1,2, 1,3 2,3
    //0,1
    
     e.innerHTML+='<img src="'+ t[0].nome+'.svg" class="bandeira">';
    e.innerHTML+='<p id="p1">'+t[0].nome+'[_] x [_]'+t[1].nome+'</p>';
    e.innerHTML+='<img src="'+t[1].nome+'.svg" class="bandeira">';
    e.innerHTML+='<button id="start1" class="botao" onclick="partida(0,1,this.id)">ok</button><p id="timer1">45:00</p>';
   //1,2
   e.innerHTML+='<img src="'+ t[1].nome+'.svg" class="bandeira">';
   e.innerHTML+='<p id="p2">'+t[1].nome+'[_]   x   [_] '+t[2].nome+'</p>';
   e.innerHTML+='<img src="'+t[2].nome+'.svg" class="bandeira">';
   e.innerHTML+='<button id="start2" class="botao" onclick="partida(1,2,this.id)">ok</button><p id="timer2"> 45:00</p>';
   //0,3
   e.innerHTML+='<img src="'+ t[0].nome+'.svg" class="bandeira">';
   e.innerHTML+='<p id="p3">'+t[0].nome+'[_] x [_]'+t[3].nome+'</p>';
   e.innerHTML+='<img src="'+t[3].nome+'.svg" class="bandeira">';
   e.innerHTML+='<button id="start3" class="botao" onclick="partida(0,3,this.id)">ok</button><p id="timer3">45:00</p>';
  //1,3
   e.innerHTML+='<img src="'+ t[1].nome+'.svg" class="bandeira">';
    e.innerHTML+='<p id="p4">'+t[1].nome+'[_]  x  [_]'+t[3].nome+'</p>';
    e.innerHTML+='<img src="'+t[3].nome+'.svg" class="bandeira">';
    e.innerHTML+='<button id="start4" class="botao" onclick="partida(1,3,this.id)">ok</button><p id="timer4">45:00</p>';
  //0,2
  e.innerHTML+='<img src="'+ t[0].nome+'.svg" class="bandeira">';
  e.innerHTML+='<p id="p5">'+t[0].nome+'[_] x [_]'+t[2].nome+'</p>';
  e.innerHTML+='<img src="'+t[2].nome+'.svg" class="bandeira">';
  e.innerHTML+='<button id="start5" class="botao" onclick="partida(0,2,this.id)">ok</button><p id="timer5">45:00</p>';
    
    //2,3
    e.innerHTML+='<img src="'+ t[2].nome+'.svg" class="bandeira">';
     e.innerHTML+='<p id="p6">'+t[2].nome+'[_]  x  [_]'+t[3].nome+'</p>';
     e.innerHTML+='<img src="'+t[3].nome+'.svg" class="bandeira">';
     e.innerHTML+='<button id="start6" class="botao" onclick="partida(2,3,this.id)">ok</button><p id="timer6">45:00</p>';
                  
   };
  

       
   function startAcceleratedTimer(totalSimulatedMinutes, totalRealMinutes,a,b) {
    const totalSimulatedSeconds = totalSimulatedMinutes * 60;
    const totalRealSeconds = totalRealMinutes * 60;
    const accelerationFactor = totalSimulatedSeconds / totalRealSeconds; 
    let simulatedSeconds = 0;
    const timerElement = document.getElementById(timer);

    function updateTimer() {
        let letreiro = document.getElementById("balao");
        let minutes = Math.floor(simulatedSeconds / 60);
        let seconds = Math.floor(simulatedSeconds % 60);
        balao = document.getElementById("balao");
        partidaatual = document.getElementById(idpartida);
        // balao.innerHTML="<p>."+minutes+".."+lancealance[0evento.lance+"... e "+evento.definicao+"</p>";
          // Usando find com uma função anônima tradicional
       balao.innerHTML="<p>"+minutes+":"+seconds+"-"+lancejogo(a,b)+"</p>";
       partidaatual = document.getElementById(idpartida);
       partidaatual.innerHTML='<p id="p'+idpartida+'">'+alvo[a].nome+'['+gola+'] x ['+golb+']'+alvo[b].nome+'</p>';
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        if (simulatedSeconds > totalSimulatedSeconds) {
            clearInterval(timerInterval);
            gola=0;
            golb=0;
            return;
        }
        simulatedSeconds += accelerationFactor;
    }

    const timerInterval = setInterval(updateTimer, 1000);
    
};




function lancejogo(a,b){
 if (D(20)>17){
        console.log("--------------simulando------------------");
        resultadoa = (alvo[a].forca*D(2))+(D(4)*D(2));
        resultadob = (alvo[b].forca*D(2))+(D(4)*D(2));
        let txtlance="";
        let txtdefinicao="";
        if (resultadoa>resultadob){
        txtlance= alvo[a].nome + " Ataca e têm a chance ....";
            if (Math.round((resultadob/resultadoa))<=.70) {
                txtdefinicao="e Marca o Gol.... ";
                gola=gola+1;
                console.log(alvo[a].nome+" fez o gol:"+gola );
                    }else{
                txtdefinicao=".. putz perdeu a chance"; 
            }
        }else {
            txtlance= alvo[b].nome + " Ataca e têm a chance ....";
            if (Math.round((resultadoa/resultadob))<=.70) {
                txtdefinicao="e Marca o Gol.... ";
                golb=golb+1;
                console.log(alvo[b].nome+" fez o gol:"+golb );
                    }else{
                txtdefinicao=".. putz perdeu a chance"; //espacomin*(n+1);
            }
        }
        return txtlance+"-"+txtdefinicao;
} else {
    return "Jogo rolando...";
}
};
