/*Вспомогательные функции*/

function capitalize(string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`;
}

function isPricesEqual(priceA, priceB) {
  return (priceA === null && priceB === null) || priceA === priceB;
}

export {capitalize, isPricesEqual};
