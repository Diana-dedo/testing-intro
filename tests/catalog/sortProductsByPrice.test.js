const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const result = sortProductsByPrice(products, 'asc');
    const ist = result.map(p => p.id);
    expect(ist).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const result = sortProductsByPrice(products);
    const ist = result.map(p => p.id);
    expect(ist).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const inputArr = products.filter(({ id }) => [1, 3, 4].includes(id));
    const result = sortProductsByPrice(inputArr, 'asc');
    const ist = result.map(p => p.id);
    expect(ist).toEqual([3, 4, 1]);
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const result = sortProductsByPrice(products, 'desc');
    const ist = result.map(p => p.id);
    expect(ist).toEqual([1, 2, 4, 5, 6, 3]);
  });
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const inputArr = products.filter(({ id }) => [3, 1, 4].includes(id));
    const result = sortProductsByPrice(inputArr, 'desc');
    const ist = result.map(p => p.id);
    expect(ist).toEqual([1, 4, 3]);
  });
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const inputArr = products.filter(({ id }) => [5, 2, 6].includes(id));
    const result = sortProductsByPrice(inputArr, 'desc');
    const ist = result.map(p => p.id);
    expect(ist).toEqual([2, 5, 6]);
  });
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const initialArr = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(initialArr, 'asc');
    expect(initialArr.map(p => p.id)).toEqual([1, 3, 4]);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const initialArr = products.filter(({ id }) => [1, 3, 4].includes(id));
    sortProductsByPrice(initialArr, 'desc');
    expect(initialArr.map(p => p.id)).toEqual([1, 3, 4]);
  });
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const initialArr = Array.from(products);
    sortProductsByPrice(initialArr);
    expect(initialArr.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
