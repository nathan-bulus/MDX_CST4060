var yourVlSpec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {"url": "https://raw.githubusercontent.com/FireRayReh/MDX_CW_Dataset/main/CSD4060/cw2-dataset/readings.csv",
  "format":{"type": "csv"}
  },    
        "mark": {"type":"bar", "tooltip": true},
          "encoding": {
            "x": {
              "aggregate": "count",
              "field": "value",
              "type": "quantitative",
              "axis": {
                "orient": "top"
              }
            },
            "y": {
              "field": "measure",
              "type": "nominal",
              "scale": {
                "rangeStep": 12        
              },
              "sort": "x"
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
                  "1,2,3-Trichlorobenzene",
                  "1,2,4-Trichlorobenzene",
                  "Acenaphthene",
                  "Acenaphthylene",
                  "PCB 52",
                  "PCB 28",
                  "PCB 118",
                  "PAHs",
                  "Trifluralin",
                  "Berilium",
                  "Boron",
                  "Fluorene",
                  "Methoxychlor",
                  "Dissolved organic carbon",
                  "Benzo(g,h,i)perylene",
                  "Indeno(1,2,3-c,d)pyrene",
                  "Carbonates",
                  "Inorganic nitrogen",
                  "Selenium",
                  "Chrysene",
                  "Pyrene",
                  "Pentachlorobenzene",
                  "PCB 101",
                  "PCB 138",
                  "PCB 153",
                  "PCB 180",
                  "Total extractable matter",
                  "Phenanthrene",
                  "Isodrin",
                  "Anthracene",
                  "Benzo(a)anthracene",
                  "Hexachlorobenzene",
                  "Naphthalene",
                  "Benzo(a)pyrene",
                  "Benzo(b)fluoranthene",
                  "Benzo(k)fluoranthene",
                  "Fluoranthene",
                  "Cesium",
                  "Barium",
                  "Aluminium"
                ]
              }
            }
          ]
    


};
vegaEmbed('#vis', yourVlSpec);