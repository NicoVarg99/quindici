//Contiene le funzioni per mescolare casualmente le celle del gioco.
//PROBLEMI RISCONTRATI: non tutte le configurazioni sono valide se gli elementi
//vengono mescolati casualmente. Per questo si è deciso di simulare la pressione
//dei tasti partendo da una configurazione valida.



function getRandomInt(min, max) {
  //Restituisce un numero intero casualmente fra min e max (compresi)
  return Math.floor(Math.random()*(max-min+1))+min;
}

function mescolaArray(){
  for(i=0;i<2000;i++){ //Fa 2000 mosse a casuali in modo da mescolare le caselle
    setupBtnPress(getRandomInt(1,16));
  }
  stampaArray();
  mosse=0;
  document.getElementById('parMosse').innerText="Mosse: "+mosse;
}

function setupExchange(ca,cb){
 //Scambia due elementi nell'array date le posizioni (0-15)
 //alert("setupExchange: scambio "+ca+"/15 con "+cb+"/15");

 if(quindici[ca]==""||quindici[cb]==""){
    var tmp=quindici[ca];
    quindici[ca]=quindici[cb];
    quindici[cb]=tmp;
 }else {
    alert("setupExchange: ERRORE: Tentativo di scambio non valido ("+ca+"="+quindici[ca]+","+cb+"="+quindici[cb]+")");
 }
}

function setupBtnPress(num){
//Simula la pressione dei tasti di un utente. Viene utilizzata questa funzione
//per mescolare in modo da ottenere una configurazione valida.
//Accetta come parametro il numero di tasto premuto (1-16);
//alert("setupBtnPress: premuto "+num+"/16");

    if(isEmpty(num-1)){
      //Elemento vuoto: non succede niente
      //alert("setupBtnPress: Errore! La cella selezionata è vuota.");
    }else{
      //Elemento pieno
        //Se c'è una cella libera accanto la scambia con la corrente
        var vuota=0;
        vuota=trovaVuota(num);


        if(vuota){
          //alert("setupBtnPress: scambio "+(num-1)+"/15 con "+(vuota-1)+"/15");
          setupExchange(num-1,vuota-1);
        }else{
          //Nessuna cella vuota trovata
          //alert("setupBtnPress: nessuna cella vuota trovata ("+vuota+")");
        }
        //Altrimenti non succede nulla
    }

}
