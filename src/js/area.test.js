import { calculateCircleArea } from './area';

describe('calculateCircleArea', () => {
  it('should calculate the area of a circle given a positive radius', () => {
    const radius = 5;
    const expectedArea = Math.PI * radius * radius;
    expect(calculateCircleArea(radius)).toEqual(expectedArea);
  });

  it('should throw an error if the radius is negative', () => {
    expect(() => calculateCircleArea(-1)).toThrow('Radius cannot be negative');
  });
});
