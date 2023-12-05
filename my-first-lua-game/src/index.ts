const deck_GUID = "4bd5ca";

// The OnLoad function. This is called after everything in the game save finishes loading.
// Most of your script code goes here.
function onLoad(saveData: any) {
  print("welcome to my first scripted game!");

  // get deck
  let deck = getObjectFromGUID(deck_GUID);
  deck.interactable = false;
  deck.setLock(true);
}

function shuffle(object: GObject) {
  object.shuffle();
}

/* 

cosas para hacer:
- conseguir una forma de actualizar el juego
    especialmente limpiar el chat y ejecutar el juego
    
    hay un workaround que es ir al menu scripts 
    y luego apretar save & load

- ver por que no me carga el boton, 
- o que hago con el xml
*/