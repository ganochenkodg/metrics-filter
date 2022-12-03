# metrics-filter

### description
Metrics-filter is a service that allows you to request metrics in Prometheus format and filter them according to the allow and block lists.

The service's workflow is:
```mermaid
graph TD
    A[Remote metrics, ENV REMOTE_METRICS_ENDPOINT] -->B
    B[Allow list rules, ENV ALLOW_LIST] --> C
    C[Block list rules, ENV BLOCK_LIST] --> D
    D[Provide metrics on the $HOST:$PORT/metrics endpoint]
```

### quick-start
1. Clone this repository and run `npm run build` or `docker-compose build`.

2. Run node-exporter as metrics source and metrics-filter with [examples rules](docker-compose.yaml), `npm run docker-run` or `docker-compose up -d`.

![](screenshot.png)

### Environment Variables

These are the environment variables understood by the container image.
| **Variable**            | **Description**                                                         |
| :---------------------- | :---------------------------------------------------------------------- |
| HOST                    | Address to bind the service, `0.0.0.0` by default                       |
| PORT                    | Port to bind the service, `9200` by default                             |
| REMOTE_METRICS_ENDPOINT | Source of metrics in the format protocol://address:port/metricsendpoint |
| ALLOW_LIST              | List of keywords to keep metrics, can be `, ; \|` separated             |
| BLOCK_LIST              | List of keywords to filter out metrics, can be `, ; \|` separated       |

