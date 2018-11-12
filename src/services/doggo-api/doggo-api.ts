// Mocks
import './temporary-mocks';

// Configurations
import {API_KEY, API_URL} from 'doggo-web-webapp/configurations/environment';

const isError = (status: number) => status >= 400;

const createHTTPError = (response: Response): ApiError => ({
  code: response.statusText,
  status: response.status
});

// Types
interface Body {
  [key: string]: any;
}

interface ApiResult {
  status: number;
  headers: Headers;
  data?: any;
  error?: ApiError;
}

export interface ApiError {
  code: string;
  status: number;
}

export interface LoginResult extends ApiResult {
  data?: LoginResultData;
}

export interface CaptureResult extends ApiResult {
  data?: CaptureResultData;
}

export interface BattleResult extends ApiResult {
  data?: BattleResultData;
}

export interface LoginResultData {
  cards: Card[];
  username: string;
  opponent: Card;
}

export interface CaptureResultData {
  card: Card;
}

export interface BattleResultData {
  card: Card;
  opponent: Card;
}

export interface Card {
  id: string;
  name: string;
  image: string;
  hpTotal: number;
  hpLeft: number;
  attack: number;
  defense: number;
}

export class DoggoAPI {
  public login = (username: string, password: string): Promise<LoginResult> => {
    return this.post('/login', {password, username});
  };

  public capture = (name: string, image: string): Promise<CaptureResult> => {
    return this.post('/capture', {name, image});
  };

  public battle = (
    ownCard: Card,
    opponentCard: Card
  ): Promise<BattleResult> => {
    return this.post('/battle', {ownCard, opponentCard});
  };

  private post(
    uri: string,
    body?: Body,
    shouldParseData?: boolean
  ): Promise<ApiResult> {
    return this.fetch(uri, 'POST', body, shouldParseData);
  }

  private async fetch(
    uri: string,
    method: string,
    body?: Body,
    shouldParseData: boolean = true
  ): Promise<any | ApiError> {
    const response = await fetch(`${API_URL}${uri}`, {
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'X-API-KEY': API_KEY,
        'content-type': 'application/json'
      },
      method
    });

    if (isError(response.status)) {
      return {error: createHTTPError(response)};
    }

    return {
      data: shouldParseData ? await response.json() : undefined,
      headers: response.headers,
      status: response.status
    };
  }
}

export default new DoggoAPI();
