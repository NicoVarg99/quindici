//TESTATO SU FIREFOX

quindici = new Array("1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","");

//Array contenente i numeri che andranno ordinati
//quindici = new Array("5","1","9","12","11","7","13","8","10","6","15","4","2","3","14","");

function stampaArray(){

  //Stampa a video l'array
  for(i in quindici){
    //alert("stampaArray i="+i);
    var pos = parseInt(i)+1;
    var newText = quindici[i];
    document.getElementById("btn"+pos).innerText=newText;

    if(newText==""){ //Nasconde il bottone vuoto
      document.getElementById("btn"+pos).style.display="none";
    }else{ //Imposta come visibili tutti gli altri elementi
      document.getElementById("btn"+pos).style.display="inline-block";
    }
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

function isEmpty(cella){
  //Funzione che controlla se una determinata cella è vuota o meno
  if(quindici[cella]==""){
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

   //Cerca a sinistra
   pos=cella-1;
   if(isVuota(pos)&&pos!=4&&pos!=8&&pos!=12)
    return pos;

    //Cerca a destra
  pos=cella+1;
  if(isVuota(pos)&&pos!=5&&pos!=9&&pos!=13)
   return pos;

   //Cerca giù
     pos=cella-4;
     if(isVuota(pos))
      return pos;

      //Cerca su
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

 function realExchange(ca,cb){
   //alert("realExchange: Scambio "+ca+" con "+cb+"!");
   quindici[ca-1]=document.getElementById("btn"+cb).innerText;
   quindici[cb-1]=document.getElementById("btn"+ca).innerText;
   stampaArray();

   if(win()){
     alert("Hai vinto!");
   }
 }

function realBtnPress(num){
  //Accetta come parametro il numero di tasto premuto (1-16);
  //alert("realBtnPress: premuto "+num+"/16");

    if(isVuota(num)){
      //Elemento vuoto: non succede niente
      //alert("Errore! La cella selezionata è vuota.");
    }else{
      //Elemento pieno
        //Se c'è una cella libera accanto la scambia con la corrente
        var vuota=0;
        vuota=trovaVuota(num);
        if(vuota){
          realExchange(num,vuota);
        }else{
          //Nessuna cella vuota trovata
        }
        //Altrimenti non succede nulla
    }

}
