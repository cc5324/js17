import {getPrice} from './get-price.js'

describe('<= 6 years old, ticket: $200', () => {
  //<=6 歲為優待票 $200
  test('6 years old, ticket: $200', () => {
    expect(getPrice(6)).toBe(200)
  });

  test('1 years old, ticket: $200', () => {
    expect(getPrice(1)).toBe(200)
  });
})

describe('>= 65 years old, ticket: $200', () => {
  test('65 years old, ticket: $200', () => {
    expect(getPrice(65)).toBe(200)
  })

  test('65 years old, ticket: $200', () => {
    expect(getPrice(100)).toBe(200)
  })
})

describe('7~64 years old, ticket: $400', () => {
  test('7 years old, ticket: $400', () => {
    expect(getPrice(7)).toBe(400)
  })

  test('20 years old, ticket: $400', () => {
    expect(getPrice(20)).toBe(400)
  })

  test('64 years old, ticket: $400', () => {
    expect(getPrice(64)).toBe(400)
  })
})