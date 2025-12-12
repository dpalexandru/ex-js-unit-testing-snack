const { getInitials, createSlug } = require("./snaks.js")

// snack1 
test('La funzione getInitials restituisce le iniziali di un nome completo. ', () => {
  expect(getInitials("ALex Dessanai")).toBe("A.D.");
  expect(getInitials("aLex rossi")).toBe("A.R.");
  expect(getInitials("aLex  rossi")).toBe("A.R.");
})


// snack2
test('La funzione createSlug restituisce una stringa in lowercase. ', () => {
  expect(createSlug("ALex Dessanai")).toBe("alex dessanai");

})
