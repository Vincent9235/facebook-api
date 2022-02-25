import express from 'express';
import routes from './routes/index.js';

export const launch = ({ protocol, port, host }) => {
  const application = express();

  application.use(express.json());

  application.use(routes);

  application.listen(
    port,
    () => console.log(`API started at ${protocol}://${host}:${port}`),
  );
}