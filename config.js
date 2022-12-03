export const port = parseInt(process.env.PORT ?? 9200, 10);
export const host = process.env.HOST || '0.0.0.0';
export const remoteEndpoint = process.env.REMOTE_METRICS_ENDPOINT || '';
export const allowList = process.env.ALLOW_LIST || '';
export const blockList = process.env.BLOCK_LIST || '';
