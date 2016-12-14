//TESTATO SU FIREFOX


quindici = new Array("1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","");

//Array contenente i numeri che andranno ordinati
//quindici = new Array("5","1","9","12","11","7","13","8","10","6","15","4","2","3","14","");
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mescolaArray(){
  for(i=0;i<quindici.length-2;i++){ //Ciclo da 0 a 15
    //alert("Elemento "+i+"/"+quindici.length);

    //scambia l'elemento con uno a caso fra i successivi

    var random=getRandomInt(i,quindici.length-2);

    //alert("Scambio el"+i+" con el"+random);
    var tmp = quindici[i];
    quindici[i]=quindici[random];
    quindici[random]=tmp;



  }

  stampaArray();

}


 function stampaArray(){
   //Stampa a video l'array
   for(i in quindici){
     var pos = parseInt(i)+1;
     var newText = quindici[i];
    document.getElementById("btn"+pos).innerText=newText;
    }


 }

 function isVuota(cella){
   //Funzione che controlla se una determinata cella è vuota o meno
    if(quindici[cella-1]==""){
      //alert("Cella: "+cella+" vuota");
      return true;
    }else {
      //alert("Cella: "+cella+" piena");
      return false;
    }

 }

 function trovaVuota(cella){
   //Funzione che cerca una cella vuota tra quelle confinanti

   var pos;

   pos=cella-1;
   if(isVuota(pos))
    return pos;

  pos=cella+1;
  if(isVuota(pos))
   return pos;

     pos=cella-4;
     if(isVuota(pos))
      return pos;

    pos=cella+4;
    if(isVuota(pos))
     return pos;

     return 0;
 }

 function win(){
    //Controlla elemento per elemento se sono in ordine
   for(i in quindici){

     if(quindici[i] == (parseInt(i)+1)||quindici[i]==""){
        //Gli elementi sono uguali, continuo il controllo
     }else{
        return false;
     }
    }
   return true;
 }

 function scambia(ca,cb){
   //alert("Scambio "+ca+" con "+cb+"!");
   quindici[ca-1]=document.getElementById("btn"+cb).innerText;
   quindici[cb-1]=document.getElementById("btn"+ca).innerText;
   stampaArray();

   if(win()){
     alert("Hai vinto!");
   }
 }


  function btnpress(num){

/*
    //var contenuto = document.getElementById("btn"+num).innerText
    var contenuto = quindici[num-1];
*/
    if(isVuota(num)){
      //Elemento vuoto: non succede niente
      //alert("Errore! La cella selezionata è vuota.");
    }else{
      //Elemento pieno

        //Se c'è una cella libera accanto la scambia con la corrente
        var vuota=0;
        vuota=trovaVuota(num);
        if(vuota){
          scambia(num,vuota);
        }else{
          //Nessuna cella vuota trovata
        }

        //Altrimenti non succede nulla
    }


  }
