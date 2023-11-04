/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(L1, L2) {
  return L1 * L2;
}

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(int1, int2) {
  if (int1 === int2) {
    return (int1 + int2) * 3;
  } else {
    return int1 + int2;
  }
}

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n) {
  if (n > 19) {
    return (n - Math.abs(19)) * 3;
  } else {
    return n - Math.abs(19);
  }
}

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if (n === 400 || 20 < n <= 100) {
    return true;
  }
}

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function eepyfy(str) {
  if (str.startsWith("EPICODE")) {
    return str;
  } else {
    return "EPICODE".concat(str);
  }
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
  if (num < 0) {
    console.log("please input a positive number");
    return;
  }

  return num % 3 === 0 || num % 7 === 0;
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
  let newString = "";
  for (i = str.length - 1; i >= 0; i--) {
    newString = newString + str[i];
  }
  return newString;
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(longStr) {
  let wordArray = longStr.split(" ");
  let newString = "";
  let tempStr = "";
  let capitalizedArray = [];

  for (word of wordArray) {
    tempStr = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedArray.push(tempStr);
    newString = newString + tempStr + " ";
  }

  return newString;
}

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
  return str.slice(1, -1);
}

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
  let arr = [];
  for (i = 0; i < n; i++) {
    arr.push(Math.random() * 10);
  }
  return arr;
}

console.log(giveMeRandom(5));
// Esercizi aggiuntivi (facoltativi)

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function checkArray(arr) {
  let sum = 0;
  for (num of arr) {
    if (num > 5) {
      console.log("maggiore di 5");
      sum += num;
    } else {
      console.log("minore di 5");
    }
  }
  return sum;
}

console.log(checkArray(giveMeRandom(5)));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

let shoppingCart = [
  {
    name: "plofi",
    id: 55,
    price: 11,
    quantity: 2,
  },
  {
    name: "briccoli",
    id: 54,
    price: 33,
    quantity: 3,
  },
];

function shoppingCartTotal(cart) {
  let total = 0;
  for (item of cart) {
    total += item.price * item.quantity;
  }
  return total;
}

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

function addToShoppingCart(obj) {
  shoppingCart.push(obj);
  return shoppingCart.length;
}

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

// queste funzioni non hanno parametro perchè realisticamente non ci sarà mai più di uno 'shopping cart' in un sito

function maxShoppingCart() {
  let prices = [];
  for (item of shoppingCart) {
    prices.push(item.price);
  }

  return findObjectValue(shoppingCart, "price", Math.max(...prices));
}

function findObjectValue(arr, prop, value) {
  for (obj of arr) {
    if (obj[prop] === value) {
      return obj;
    }
  }
}

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

function latestShoppingCart() {
  return shoppingCart[shoppingCart.length - 1];
}

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

function loopUntil(int) {
  let limit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let repetitions = 0;
  let attempts = 0;
  if (limit.includes(int)) {
    while (repetitions < 3) {
      // 10 invece di 9 qui per rendere la funzione possibile anche quando int=9
      if (Math.random() * 10 > int) {
        flag = true;
        repetitions++;
        attempts++;
      } else {
        flag = false;
        repetitions = 0;
        attempts++;
      }
      if (repetitions === 3) {
        console.log(`success in ${attempts} attempts!`);
        break;
      }
    }
  } else {
    console.log("please insert an integer between 0 and 9");
  }
}

loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

const variedArr = ["plofi", 5, 2, 12, "briccoli", 15, "cappellobuffo"];

function average(arr) {
  let sum = 0;
  let numArr = [];
  for (i of arr) {
    if (typeof i === "number") {
      sum += i;
      numArr.push(i);
    }
  }
  return sum / numArr.length;
}

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

strArr = ["plofi", "briccoli", "arkhea", "zaxAnon", "cappelloBuffo"];

function createWordObject(str) {
  return { word: str, length: str.length };
}

function longest(arr) {
  let wordLengthArray = [];

  for (str of arr) {
    wordLengthArray.push(str.length);
  }

  for (word of arr) {
    if (word.length === Math.max(...wordLengthArray)) {
      return word;
    }
  }
}

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

// ...else {return false} è abbastanza ridondante, l'ho messo poichè non scrivere nulla o scrivere return senza argomenti ritornerebbe undefined che è un valore falsy ma non strettamente booleano

function spamFilter(emailContent) {
  if (emailContent.includes("SPAM") || emailContent.includes("SCAM")) {
    return true;
  } else {
    return false;
  }
}

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

const time = new Date("9/28/1996");
const time2 = new Date("4/22/2012");

function daysPassed(dateObject) {
  const msToDays = 1000 * 3600 * 24;
  return (dateObject - time) / msToDays;
}

console.log(time);
console.log(time2);

console.log(daysPassed(time2));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

function matrixGenerator(x, y) {
  let matrixFrame = [];
  let y_value = 0;

  for (i = 0; i < y; i++) {
    let arr = [];
    matrixFrame.push(arr);
  }

  for (arr of matrixFrame) {
    for (i = 0; i < x; i++) {
      arr.push(`${y_value}${i}`);
    }
    y_value++;
  }
}

matrixGenerator(2, 7);
