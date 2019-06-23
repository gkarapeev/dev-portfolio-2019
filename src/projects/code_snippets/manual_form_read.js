const code =
`  function setEngLevel() {
  let currentLevel = selectedRow.cells[5].innerHTML;

  switch (currentLevel) {
    case "A1":
      document.getElementById("engLvlA1").checked = true;
      break;

    case "A2":
      document.getElementById("engLvlA2").checked = true;
      break;

    case "B1":
      document.getElementById("engLvlB1").checked = true;
      break;

    case "B2":
      document.getElementById("engLvlB2").checked = true;
      break;

    case "C1":
      document.getElementById("engLvlC1").checked = true;
      break;

    case "C2":
      document.getElementById("engLvlC2").checked = true;
      break;

    default:
      break;
  }
}`;

export default code;