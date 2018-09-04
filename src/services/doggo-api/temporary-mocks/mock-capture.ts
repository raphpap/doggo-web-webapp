// Types
import {CaptureResultData} from '../doggo-api';

export const mockCapture = (
  name: string
): CaptureResultData => ({
  card: {
    hp: 99,
    name
  }
});
