// snack1
function getInitials(str) {
  const [nome, cognome] = str.split(" ").filter(str => str !== '');
  const inizialeNome = nome.split('')[0].toUpperCase()
  const inizialeCognome = cognome.split('')[0].toUpperCase()
  return `${inizialeNome}.${inizialeCognome}.`;
}

// snack2, snack4 e snack 6

function createSlug(str) {
  if (!str) {
    throw new Error("Stringa non valida ");
  }
  const strMinuscola = str.toLowerCase();
  const senzaSpazi = strMinuscola.replaceAll(' ', '-');
  return senzaSpazi;
}

// snack3
function average(arr) {
  arr.forEach(element => {
    if (isNaN(element)) {
      throw new Error("La media funziona solo su un array di numeri");
    }
  });
  media = arr.reduce((acc, num) => acc + num, 0) / arr.length
  return media;
}

// snack5
function isPalindrome(str) {
  const strContratio = str.split('').reverse().join('');
  const result = str.toLowerCase() === strContratio.toLowerCase()
  return result
}

// snack7
function findPostById(arr, id) {
  // controllo se id è un numero altrimenti errore
  if (isNaN(id)) {
    throw new Error("L'id passato non è un numero");
  }

  // controllo se l'array passato ha le proprietà corrette
  arr.forEach(element => {
    if (element.id === undefined ||
      element.slug === undefined ||
      element.title === undefined
    ) {
      throw new Error("L'array passato non è valido, deve essere un array di oggetti con proprietà id, slug e title");
    }
  });

  const result = arr.find(post => post.id === id)
  return result || null;


}





module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById
}