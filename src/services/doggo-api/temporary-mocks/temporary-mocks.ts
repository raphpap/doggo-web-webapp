// Vendor
import fetchMock from 'fetch-mock';

// Mocks
import {mockBattle} from './mock-battle';
import {mockCapture} from './mock-capture';
import {mockLogin} from './mock-login';

// Configs
import {API_KEY, API_URL} from 'doggo-web-webapp/configurations/environment';

// Utils
const sleep = (delayMS: number) => {
  return new Promise(resolve => setTimeout(resolve, delayMS));
};

fetchMock.config.fallbackToNetwork = true;

fetchMock.mock({
  headers: {'X-API-Key': API_KEY},
  matcher: `${API_URL}/login`,
  method: 'POST',
  response: async (_url: string, opts: RequestInit) => {
    const {body} = opts;
    const {username, password} = JSON.parse(body as string);
    await sleep(1500);
    return mockLogin(username, password);
  }
});

fetchMock.mock({
  headers: {'X-API-Key': API_KEY},
  matcher: `${API_URL}/capture`,
  method: 'POST',
  response: async (_url: string, opts: RequestInit) => {
    const {body} = opts;
    const {name, image} = JSON.parse(body as string);
    await sleep(1500);
    return mockCapture(name, image);
  }
});

fetchMock.mock({
  headers: {'X-API-Key': API_KEY},
  matcher: `${API_URL}/battle`,
  method: 'POST',
  response: async (_url: string, opts: RequestInit) => {
    const {body} = opts;
    const {ownCard, opponentCard} = JSON.parse(body as string);
    await sleep(1500);
    return mockBattle(ownCard, opponentCard);
  }
});
