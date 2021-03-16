var quality = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {"url": "https://raw.githubusercontent.com/FireRayReh/MDX_CW_Dataset/main/CSD4060/cw2-dataset/readings.csv",
  "format":{"type": "csv"}
  },
    "vconcat": [
        {
              "selection": {
                "index": {
                    "type": "multi", "fields": ["location"], "bind": "legend"
                }
              },
              "width": 550,
              "height": 400,
              "mark": "bar",
              "encoding": {
                "x": {
                  "field": "location",
                  "type": "nominal",
                  "sort": "y"
                },
                "y": {
                  "aggregate": "sum",
                  "field": "value",
                  "type": "quantitative"          
                },
                "color": {
                    "field": "location",
                    "type": "nominal"
                },
                "opacity": {
                    "condition": {"selection": "index", "value": 1},
                    "value": 0.2
                }
              },
              "config": {
                "line": {
                  "point": true
                },
                "scale": {
                  "useUnaggregatedDomain": true
                }
              } 
            },
            {
              "width": 550,
              "height": 400,
               "selection": {
                "index": {
                    "type": "multi", "fields": ["location"], "bind": "legend"
                }
              },
              "mark": "line",
              "encoding": {
                "x": {
                  "timeUnit": "year",
                  "field": "sample date",
                  "type": "temporal",
                  "scale": {}
                },
                "y": {
                  "field": "value",
                  "type": "quantitative",
                  "scale": {}
                },
                "color": {
                  "field": "location",
                  "type": "nominal"
                },
                "opacity": {
                    "condition": {"selection": "index", "value": 1},
                    "value": 0.2
                }
              },
              "config": {
                "line": {
                  "point": true
                },
                "scale": {
                  "useUnaggregatedDomain": true
                }
              }

            }
        ]
    
      
};
vegaEmbed('#vis5', quality);