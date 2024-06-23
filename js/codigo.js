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
    { nome: "Costa Rica", ranking: 1440.77, forca: 0 },
    { nome: "Paraguai", ranking: 1430.73,forca: 0},
];
let times = timea.concat(timeb,timec,timed);
let gola=0;
let golb=0;
let menor=2000;
// encontrar menor ranking
times.forEach(rmenor);
// gerar força baseado no fator 553.16
times.forEach(criarforca);
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
  if (item.ranking<menor){
    menor=item.ranking;
  } 
}

function criarforca(item,index) {
    item.forca= item.ranking/ menor;
}

// receberá a e b, sendo a e b os indices dos times na matriz de times
function partida(a,b) {
    // cada oportunidade bem aproveitada resulta em Gol
   console.clear();
   console.log("--------------simulando------------------");
    // numero de lances que haverão na partida
    let l = D(12);
    let espacomin = Math.round(90/l);
    // todo: Pensar no Balanceamento dos minutos da 
    console.log("oportunidades lances de gol na partida foram " +l);
    for (let n = 0; n<l; n++) {
        console.log("......... "+ (n+1));
        // aplicando regra definida
       // Fórmula seria:  (força * D10)+(sorte(D10)*dia(D2))
     let resultadoa, resultadob;
        // formula simplificada, menos sorte e mais ranking
     resultadoa = (alvo[a].forca*D(2))+(D(4)*D(2));
    resultadob = (alvo[b].forca*D(2))+(D(4)*D(2));
    //console.log(times[a].nome + "Fez: "+ resultadoa);
    //console.log(times[b].nome + "Fez: "+resultadob);
   let mensagem="";
    if (resultadoa>resultadob){
       mensagem = alvo[a].nome + "  have a oportuniite and...";
        if (Math.round((resultadob/resultadoa))<=.70) {
            mensagem+="Gol....  aos "+espacomin*(n+1);
            gola++;
        }else{
            mensagem+="perdeu a oportunidade....  aos "+espacomin*(n+1);
        }
    }else {
        mensagem =alvo[b].nome + "  have a oportuniite and...";
        if (Math.round((resultadoa/resultadob))<=.70) {
            mensagem+="Gol.... aos "+espacomin*(n+1);
            golb++;
        }else{
            mensagem+="perdeu a oportunidade.... aos "+espacomin*(n+1);
        }
    }
    console.log("Olho no Lance: "+mensagem);
    }
         
  console.log("Placar Final ");
  console.log(alvo[a].nome +" "+gola+" X "+golb+" "+alvo[b].nome);
  gola=0;
  golb=0;
  
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
    e.innerHTML+='<p>'+t[0].nome+'[_] x [_]'+t[1].nome+'</p>';
    e.innerHTML+='<img src="'+t[1].nome+'.svg" class="bandeira">';
    e.innerHTML+='<button id="start" class="botao" onclick="partida(0,1)">ok</button><p>45:00:00</p>';
   //1,2
   e.innerHTML+='<img src="'+ t[1].nome+'.svg" class="bandeira">';
   e.innerHTML+='<p >'+t[1].nome+'[__]  x  [__]'+t[2].nome+'</p>';
   e.innerHTML+='<img src="'+t[2].nome+'.svg" class="bandeira">';
   e.innerHTML+='<button id="start" class="botao" onclick="partida(1,2)">ok</button><p>45:00:00</p>';
   //0,3
   e.innerHTML+='<img src="'+ t[0].nome+'.svg" class="bandeira">';
   e.innerHTML+='<p>   '+t[0].nome+'[_] x [_]'+t[3].nome+'</p>';
   e.innerHTML+='<img src="'+t[3].nome+'.svg" class="bandeira">';
   e.innerHTML+='<button id="start" class="botao" onclick="partida(0,3)">ok</button><p>45:00:00</p>';
  //1,3
   e.innerHTML+='<img src="'+ t[1].nome+'.svg" class="bandeira">';
    e.innerHTML+='<p>'+t[1].nome+'[__]  x  [__]'+t[3].nome+'</p>';
    e.innerHTML+='<img src="'+t[3].nome+'.svg" class="bandeira">';
    e.innerHTML+='<button id="start" class="botao" onclick="partida(1,3)">ok</button><p>45:00:00</p>';
  //0,2
  e.innerHTML+='<img src="'+ t[0].nome+'.svg" class="bandeira">';
  e.innerHTML+='<p>'+t[0].nome+'[_] x [_]'+t[2].nome+'</p>';
  e.innerHTML+='<img src="'+t[2].nome+'.svg" class="bandeira">';
  e.innerHTML+='<button id="start" class="botao" onclick="partida(0,2)">ok</button><p>45:00:00</p>';
    
    //2,3
    e.innerHTML+='<img src="'+ t[2].nome+'.svg" class="bandeira">';
     e.innerHTML+='<p>'+t[2].nome+'[__]  x  [__]'+t[3].nome+'</p>';
     e.innerHTML+='<img src="'+t[3].nome+'.svg" class="bandeira">';
     e.innerHTML+='<button id="start" class="botao" onclick="partida(2,3)">ok</button><p>45:00:00</p>';
                  
   };
  

       
