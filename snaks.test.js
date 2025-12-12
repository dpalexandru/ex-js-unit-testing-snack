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

// snack3
const numeri = [4, 2, 2, 2]
test('La funzione average calcola la media aritmetica di un array di numeri.', (
) => {
  expect(average(numeri)).toBe(2.5)
  expect(average([4, 2, 2, 2])).toBe(2.5)
  expect(() => average([4, 2, 2, "ciao"])).toThrow()

})

// snack2 e snack 4
test('La funzione createSlug restituisce una stringa in lowercase. La funzione createSlug sostituisce gli spazi con -', () => {
  expect(createSlug("ALex Dessanai")).toBe("alex-dessanai");
  expect(createSlug("prova test SLUG")).toBe("prova-test-slug");

})

