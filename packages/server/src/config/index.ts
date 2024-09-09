import { Server } from '@thatsagoodspot-app/types/src/index';

module.exports = {
  port: process.env.PORT || 3000,
  db: {
    host: 'localhost',
    port: 27017,
  }
} as Server.ServerConfig;