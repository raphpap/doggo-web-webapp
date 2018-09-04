// Types
import {CaptureResultData} from '../doggo-api';

export const mockCapture: (card: {
  name: string;
  image: string;
}) => CaptureResultData = ({name, image}) => ({
  card: {
    hp: 99,
    image,
    name
  }
});
