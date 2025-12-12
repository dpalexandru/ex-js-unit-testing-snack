const { getInitials,
  createSlug,
  average
} = require("./snaks.js")

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


// snack3
const numeri = [4, 2, 2, 2]
test('La funzione average calcola la media aritmetica di un array di numeri.', (
) => {
  expect(average(numeri)).toBe(2.5)
  expect(average([4, 2, 2, 2])).toBe(2.5)
  expect(() => average([4, 2, 2, "ciao"])).toThrow()


})
