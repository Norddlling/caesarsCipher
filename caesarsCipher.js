function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decodedStr = "";
  let decodedLiteral = "";
  let indexOfLiteral = 0;
  for (let literal of str) {
    if (/\W/.test(literal) || literal === "_") {
      decodedStr += literal;
    } else {
      indexOfLiteral = alphabet.indexOf(literal) + 13;
      if (indexOfLiteral > alphabet.length - 1) {
        indexOfLiteral = indexOfLiteral - alphabet.length;
      }
      decodedLiteral = alphabet[indexOfLiteral];
      decodedStr += decodedLiteral;
    }
  }
  return decodedStr;
}

rot13("SERR PBQR PNZC");
