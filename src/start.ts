import Server from './server';

if (process.argv[2] !== 'test') {
  const server = new Server();
  server.start();
}