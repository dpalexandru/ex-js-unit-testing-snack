const { getInitials,
  createSlug,
  average,
  isPalindrome,
  findPostById
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

// snack2, snack 4 e snack5
test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido,La funzione createSlug restituisce una stringa in lowercase. La funzione createSlug sostituisce gli spazi con -', () => {
  expect(createSlug("ALex Dessanai")).toBe("alex-dessanai");
  expect(createSlug("prova test SLUG")).toBe("prova-test-slug");
  expect(() => createSlug("")).toThrow();
  expect(() => createSlug(null)).toThrow();

})


// snack5 
test('La funzione isPalindrome verifica se una stringa è un palindromo. ', () => {
  expect(isPalindrome("dessanai")).toBeFalsy();
  expect(isPalindrome("Anna")).toBeTruthy()
})



// snack7 
const posts = [
  {
    id: 1,
    title: "Introduzione a JavaScript",
    slug: "introduzione-a-javascript"
  },
  {
    id: 2,
    title: "Come usare le funzioni in JavaScript",
    slug: "come-usare-le-funzioni-in-javascript"
  },
  {
    id: 3,
    title: "Array e oggetti in JavaScript",
    slug: "array-e-oggetti-in-javascript"
  },
  {
    id: 4,
    title: "Cos'è un palindromo",
    slug: "cos-e-un-palindromo"
  }
];


test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id ', () => {
  expect(findPostById(posts, 2)).toEqual({
    id: 2,
    title: "Come usare le funzioni in JavaScript",
    slug: "come-usare-le-funzioni-in-javascript"
  })
  expect(() => findPostById(posts, "ciao")).toThrow();
  expect(() => findPostById([1, 2, 3], 2)).toThrow();

  expect(findPostById(posts, 6)).toBe(null);

})



