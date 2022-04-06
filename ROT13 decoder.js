function rot13(str) {
    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; //L is length 12
    let resultStr = "";
    for (let i = 0; i < str.length; i++) {
        if (alphabet.indexOf(str[i]) >= 0 && alphabet.indexOf(str[i]) <= 12) { //indeOf returns index value if found, if not, returns < 0
            resultStr += alphabet[alphabet.indexOf(str[i]) + 13]; //this is how you add to a string
        } else if (alphabet.indexOf(str[i]) >= 0 && alphabet.indexOf(str[i]) > 12) {
            resultStr += alphabet[alphabet.indexOf(str[i]) - 13]
        } else {
            resultStr += str[i];
        } 
    } return resultStr;
  }
  
  console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));


  