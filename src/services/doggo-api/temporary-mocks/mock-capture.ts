// Types
import {CaptureResultData} from '../doggo-api';

// Utilities
import generateRandomNumber from 'doggo-web-webapp/utilities/generate-random-number';

export const mockCapture: (name: string, image: string) => CaptureResultData = (
  name,
  image
) => ({
  card: {
    attack: generateRandomNumber(20, 100),
    defense: generateRandomNumber(20, 100),
    hp: generateRandomNumber(20, 100),
    id: generateRandomNumber(1000, 100000).toString(),
    image,
    name
  }
});
