const frutas = ["Abacaxi","Banana", "Manga", "Morango"];


console.log(frutas.IndexOf("Banana"));
// indexof retorna a posição de um item na array.

let item = frutas.IndexOf("Banana")

frutas.splice(item, 1);
// Método splice - Remove um item do array, é necessario informar a posição do item que deseja remover e a quantidade de itens a partir desta posição

console.log(frutas);


