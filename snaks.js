// snack1
function getInitials(str) {
  const [nome, cognome] = str.split(" ").filter(str => str !== '');
  const inizialeNome = nome.split('')[0].toUpperCase()
  const inizialeCognome = cognome.split('')[0].toUpperCase()
  return `${inizialeNome}.${inizialeCognome}.`;
}

// snack2
function createSlug(str) {
  const strMinuscola = str.toLowerCase();
  return strMinuscola;
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





module.exports = {
  getInitials,
  createSlug,
  average
}