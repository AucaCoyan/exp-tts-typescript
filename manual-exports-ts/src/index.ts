import { getObjectFromGUID } from "./types/base";
import { UI } from "./types/ui";
import { Player } from "./types/player";

const selectedContract = "expedition";
const numberOfPlayers = "";
const beastPlayer = "";
const selectedBeast = "bolgin";
const tealSelectedHunter = "assar";
const purpleSelectedHunter = "grimgeir";
const yellowSelectedHunter = "iona";
const prevBeastPlayer = "";
const board_id = "437cd7";
const tealReady = false;
const purpleReady = false;
const yellowReady = false;

function onLoad() {
  const board = getObjectFromGUID(board_id);
}

function getHost(): Player {
  return Player.getPlayers()[1];
}

function setColor(player: Player) {
  player.color == "Teal";
}

function toggleButtonHover(player: Player, id: any) {
  if (player.color == "Teal" || player.color == "Purple") {
    UI.setAttribute(id, "image", "buttonhover");
  }
}

function onSave() {}
