//SPECIFICATIONS
//L'entrée des parametres 5 et 10 donne le resultat 15
//Le resultat doit être un number
//Les entrées sont bien des number
//Les parametres autres que number retournent un message d'erreur

test("addition de 2 number", () => {
  expect(addition(5, 10)).toBe(15);
  expect(typeof addition(5, 10)).toBe("number");
  expect(addition(5, 10)).toEqual(15);
  expect(addition("string", "fluo")).toEqual(
    Error("Number expected as parameter")
  );
});
