let jogador, vencedor = null;
const jogadorSelecionado = document.getElementById('jogadorSelecionado');
const vencedorSelecionado = document.getElementById('vencedorSelecionado');

mudarJogador('X');

function escolherQuadrado(id){
   if(vencedor !== null){
      return;
   }

   const square = document.getElementById(id);
   if(square.innerHTML !== '-'){
      return;
   }
   square.innerHTML = jogador;
   square.style.color = '#000';

   if(jogador === 'X'){
      jogador = 'O';
   }else{
      jogador = 'X';
   }
   
   mudarJogador(jogador);
   checarVitoria();
}

function mudarJogador(valor){
   jogador = valor;
   jogadorSelecionado.innerHTML = jogador;
}

function checarVitoria(){
   const quadrado1 = document.getElementById('1');
   const quadrado2 = document.getElementById('2');
   const quadrado3 = document.getElementById('3');
   const quadrado4 = document.getElementById('4');
   const quadrado5 = document.getElementById('5');
   const quadrado6 = document.getElementById('6');
   const quadrado7 = document.getElementById('7');
   const quadrado8 = document.getElementById('8');
   const quadrado9 = document.getElementById('9');

   if (verificarVitoria(quadrado1, quadrado2, quadrado3)){
      mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
      mudarVencedor(quadrado1);
      return;
   }
   if (verificarVitoria(quadrado4, quadrado5, quadrado6)){
      mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
      mudarVencedor(quadrado4);
      return;
   }
   if (verificarVitoria(quadrado7, quadrado8, quadrado9)){
      mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
      mudarVencedor(quadrado7);
      return;
   }
   if (verificarVitoria(quadrado1, quadrado4, quadrado7)){
      mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
      mudarVencedor(quadrado4);
      return;
   }
   if (verificarVitoria(quadrado2, quadrado5, quadrado8)){
      mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
      mudarVencedor(quadrado2);
      return;
   }
   if (verificarVitoria(quadrado3, quadrado6, quadrado9)){
      mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
      mudarVencedor(quadrado3);
      return;
   }
   if (verificarVitoria(quadrado1, quadrado5, quadrado9)){
      mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
      mudarVencedor(quadrado1);
      return;
   }
   if (verificarVitoria(quadrado3, quadrado5, quadrado7)){
      mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
      mudarVencedor(quadrado3);

   }

}

function mudarVencedor(quadrado){
   vencedor = quadrado.innerHTML;
   vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
   quadrado1.style.background = '#30c230';
   quadrado2.style.background = '#30c230';
   quadrado3.style.background = '#30c230';
}

function verificarVitoria(quadrado1, quadrado2, quadrado3){
   let eigual = false;
   
   if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado1.innerHTML  === quadrado3.innerHTML){
      eigual = true;
   }
   return eigual;
}

function reiniciar(){
   vencedor = null;
   vencedorSelecionado.innerHTML = '';
   
   for(let i = 1; i <= 9; i++){
      let quadrado = document.getElementById(i);
      quadrado.style.background = "#fff";
      quadrado.style.color = "#fff"
      quadrado.innerHTML = '-';
   }

   mudarJogador('X')

}