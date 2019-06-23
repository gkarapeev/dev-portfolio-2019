const code =
`this.executeTurn = function () {

  this.squareUpdate();
  this.fillValues();

  if (completeness.some(this.isTrue)) {
    alert(\`Player "\${currentSign}" wins!\`);
  }

  currentSignToggle();
}`;

export default code;