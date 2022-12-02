export const port = parseInt(process.env.PORT ?? 9200, 10);
export const host = process.env.HOST || '0.0.0.0';
export const remoteEndpoint = process.env.REMOTE_METRICS_ENDPOINT || '';
export const whiteList = process.env.WHITE_LIST_RULES || '';
export const blackList = process.env.BLACK_LIST_RULES || '';
