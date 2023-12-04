function printAlphabets(callback) {
    function printNextAlphabet(i) {
      if (i <= 90) {
        const alphabet = String.fromCharCode(i);
        console.log(alphabet);
        setTimeout(() => {
          printNextAlphabet(i + 1);
        }, 1000);
      } else {
        callback();
      }
    }
  
    printNextAlphabet(65);
  }
  
  printAlphabets(() => {
    console.log("All alphabets are printed!");
  });
  