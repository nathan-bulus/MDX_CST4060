var pipit = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {"url": "https://raw.githubusercontent.com/FireRayReh/MDX_CW_Dataset/main/CSD4060/cw2-dataset/readings.csv",
  "format":{"type": "csv"}
  },
  "width": 750,
  "height": 500,
  "selection": {
    "index": {
      "type": "multi", "fields": ["location"], "bind": "legend"
    }
  },
  "title": "Lead Contamination",
  "mark": {"type": "line", "tooltip": true},
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
      "scale": {},
      "title": "Lead Readings" 
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
          "Lead"
        ]
      }
    }
  ]

      
};
vegaEmbed('#vis6', pipit);

var pipit2 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {"url": "https://raw.githubusercontent.com/FireRayReh/MDX_CW_Dataset/main/CSD4060/cw2-dataset/readings.csv",
  "format":{"type": "csv"}
  },
  "title": "Methylosmoline Contamination",
  "width": 750,
  "height": 500,
  "selection": {
    "index": {
      "type": "multi", "fields": ["location"], "bind": "legend"
    }
  },
  "mark": {"type": "line", "tooltip": true},
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
      "scale": {},
      "title": "Methylosmoline Readings"    
        
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
          "Methylosmoline"
        ]
      }
    }
  ]

      
};
vegaEmbed('#vis7', pipit2);