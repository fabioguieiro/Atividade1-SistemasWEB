function validar(campo, alerta) {

}

function calcular() {

  var competidorNome = [
  document.dados.nome1.value.toString(),
  document.dados.nome2.value.toString(),
  document.dados.nome3.value.toString(),
  document.dados.nome4.value.toString(),
  document.dados.nome5.value.toString(),
  document.dados.nome6.value.toString()];


  var competidorTempo = [
  parseInt(document.dados.tempo1.value) ,
parseInt(document.dados.tempo2.value) ,
parseInt(document.dados.tempo3.value) ,
 parseInt(document.dados.tempo4.value) ,
 parseInt(document.dados.tempo5.value) ,
 parseInt(document.dados.tempo6.value) 
  ]


   
  
  var res;
  var aux =0;
var x;
  for(x=0;x<6;x++){
      if(competidorTempo[x]<=competidorTempo[aux]){
          aux = x;
      }
  }

  res = competidorNome[aux]+" ganhou, com o tempo de "+competidorTempo[aux]+" segundos!";

  document.dados.resultado.value = res;


}
