import { fahrenheitToCelsius } from './temp';

describe('fahrenheitToCelsius', () => {
  it('should convert Fahrenheit to Celsius correctly', () => {
    expect(fahrenheitToCelsius(32)).toEqual(0);
    expect(fahrenheitToCelsius(100)).toEqual(37.77777777777778);
  });
});
