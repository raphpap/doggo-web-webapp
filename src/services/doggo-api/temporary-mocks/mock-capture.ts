// Types
import {CaptureResultData} from '../doggo-api';

// Utilities
import generateRandomNumber from 'doggo/utilities/generate-random-number';

export const mockCapture: (name: string, image: string) => CaptureResultData = (
  name,
  image
) => {
  const hp = generateRandomNumber(20, 50) * 10;

  return {
    card: {
      attack: generateRandomNumber(2, 10) * 10,
      defense: generateRandomNumber(2, 10) * 10,
      hpLeft: hp,
      hpTotal: hp,
      id: generateRandomNumber(1000, 100000).toString(),
      image,
      name
    }
  };
};
