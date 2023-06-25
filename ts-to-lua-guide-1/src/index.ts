// The OnLoad function. This is called after everything in the game save finishes loading.
// Most of your script code goes here.
function onLoad(saveData: any) {
  // Lock color-UI cube
  let cube = getObjectFromGUID("c1a0d1");
  cube.interactable = false;
  cube.setLock(true);
}
