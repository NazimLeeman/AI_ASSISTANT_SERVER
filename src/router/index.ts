import { WebSocket } from 'ws';
import Logger from '../utils/Logger';
export class Router {

  constructor(private ws: WebSocket) {}

  async handleMessage(message: string) {
    const data = JSON.parse(message);

  }

}