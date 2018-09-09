export const generateRandomNumber = (lowerLimit: number, higherLimit: number) => {
  const range = higherLimit - lowerLimit;
  const baseValue = Math.random() * range;
  const value = baseValue + lowerLimit;
  return Math.ceil(value);
}

export default generateRandomNumber;
