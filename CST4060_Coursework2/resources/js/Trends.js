var trend = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {"url": "https://raw.githubusercontent.com/FireRayReh/MDX_CW_Dataset/main/CSD4060/cw2-dataset/readings.csv",
  "format":{"type": "csv"}
  },
    "width": 600,
    "height": 500,
    "mark": {"type": "line", "tooltip": true},
    "selection": {
        "index": {
      "type": "multi", "fields": ["location"], "bind": "legend"}
    },
      "encoding": {
        "y": {
          "aggregate": "average",
          "field": "value",
          "type": "quantitative"
        },
        "x": {
          "timeUnit": "month",
          "field": "sample date",
          "type": "temporal",      
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
      "transform": [
        {
          "filter": {
            "field": "measure",
            "oneOf": [
              "Water temperature"
            ]
          }
        }
      ]
};
vegaEmbed('#vis2', trend);

var trend_2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {"url": "https://raw.githubusercontent.com/FireRayReh/MDX_CW_Dataset/main/CSD4060/cw2-dataset/readings.csv",
  "format":{"type": "csv"}
  },
      "width": 400,
      "mark": "line",
      "encoding": {
        "y": {
          "aggregate": "average",
          "field": "value",
          "type": "quantitative"
        },
        "x": {
          "timeUnit": "month",
          "field": "sample date",
          "type": "temporal",
          "scale": {}
        },
        "column": {
          "field": "measure",
          "type": "nominal"
        }
      },
      "config": {
        "line": {
          "point": true
        },
        "scale": {
          "useUnaggregatedDomain": true
        }
      },
    "title": "The inverse relation between Dissolved Oxygen and Water Temperature",
      "transform": [
        {
          "filter": {
            "field": "measure",
            "oneOf": [
              "Water temperature",
              "Dissolved oxygen"
            ]
          }
        }
      ]
    
};
vegaEmbed('#vis3', trend_2);

var trend3 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {"url": "https://raw.githubusercontent.com/FireRayReh/MDX_CW_Dataset/main/CSD4060/cw2-dataset/readings.csv",
  "format":{"type": "csv"}
  },
        
"vconcat":[
    
    {
    "width":550,
    "height": 500,
    "selection": {
        "index": {
      "type": "multi", "fields": ["location"], "bind": "legend"}
    },
    "title": "calcium",
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
          "aggregate":"average",    
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
      },
      "transform": [
        {
          "filter": {
            "field": "measure",
            "oneOf": [
              "Calcium"
            ]
          }
        }
      ] 
    },
    {
    "width":550,
    "height": 500,
    "selection": {
        "index": {
      "type": "multi", "fields": ["location"], "bind": "legend"}
    },
      "title": "Magnesium",
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
          "aggregate":"average",
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
      },
      "transform": [
        {
          "filter": {
            "field": "measure",
            "oneOf": [
              "Magnesium"
            ]
          }
        }
      ]
    }
]


    
    
};
vegaEmbed('#vis8', trend3);