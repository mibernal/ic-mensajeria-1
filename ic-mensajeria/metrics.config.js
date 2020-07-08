module.exports = {
    output: "build/metrics.txt",
    tasks: [
      {
        type: "size",
        path: "build/*.js",
        labels: {
          compression: "gzip",
          type: "javascript",
          project: "app",
        },
        // optional, 'bundle_size_bytes_total` is default value
        // metricName: "bundle_size_bytes_total"
      },
      {
        type: "custom",
        // client is default export from 'prom-client' library
        resolve: function(client) {
          // you can create any valid metric, please refer to 'prom-client' docs
          const metric = new client.Counter({
            name: "metric_name",
            help: "metric_help",
          });
   
          // calculate metric value
          metric.inc(1);
   
          // and do not forget to return metric
          return metric;
        },
      },
    ],
  };