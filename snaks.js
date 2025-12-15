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






module.exports = {
  getInitials,
  createSlug,
  average,
  isPalindrome
}