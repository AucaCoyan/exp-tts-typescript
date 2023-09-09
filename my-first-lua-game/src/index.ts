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

function onUpdate(params:type) {
  
}

function shuffle(object: GObject) {
  object.shuffle();
  object.
}
