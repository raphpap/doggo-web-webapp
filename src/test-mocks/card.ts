// Types
import {Card} from 'doggo/context';

export const mockCard = (id: number): Card => ({
  attack: id,
  defense: id,
  hpLeft: id,
  hpTotal: id,
  id: `${id}`,
  image: `${id}`,
  name: `${id}`,
});
