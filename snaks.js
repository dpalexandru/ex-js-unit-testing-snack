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







module.exports = {
  getInitials,
  createSlug
}