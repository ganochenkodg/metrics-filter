import fastify from 'fastify';
import got from 'got';
import { port, host, remoteEndpoint, whiteList, blackList } from './config.js';
import { toRegex, applyRegex, whiteListR, blackListR } from './filter.js';
import gracefulShutdown from 'fastify-graceful-shutdown';

export const app = fastify({ logger: true });
app.register(gracefulShutdown);

//metrics endpoint
app.get('/metrics', async (req, res) => {
  console.log(remoteEndpoint);
  try {
    const response = await got(remoteEndpoint);
    res.send(applyFilters(response.body));
  } catch (error) {
    console.log(error.response.body);
    res.code(500).send(error.response.body);
  }
});

//healthcheck endpoint
app.get('/healthz', (req, res) => {
  res.send('OK');
});

//check the source endpoint
if (remoteEndpoint == '') {
  console.log('Error! Env REMOTE_METRICS_ENDPOINT is blank or undefined!');
  process.exit(1);
}

//generate filter regex
toRegex(whiteList, blackList);

//start listening
app.listen(port, host, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
