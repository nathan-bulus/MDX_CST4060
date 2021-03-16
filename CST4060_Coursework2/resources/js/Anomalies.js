var anomalies = {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "A simple bar chart with embedded data.",
        "width": 800,
        "height": 320,
        "data": {
        "url": "https://raw.githubusercontent.com/FireRayReh/MDX_CW_Dataset/main/CSD4060/cw2-dataset/readings.csv",
        "format": { "type": "csv" }
        },
            "vconcat":[
              {
                "width": 550,
                "layer":[
                      {
                          "selection": {
                            "index": {
                              "type": "single",
                              "on": "mouseover",
                              "encodings": ["x"],
                              "nearest": true
                            }
                          },
                          "mark": "point",
                          "encoding": {
                              "x": {
                                  "field": "sample date", 
                                  "type": "ordinal",
                                  "axis": null
                              },
                              "opacity": {"value": 0}
                          }
                      },
                      {
                          "title": "August 15th 2003",
                          "mark": {"type": "line"},
                          "encoding": {
                              "x": {
                                  "field": "sample date", 
                                  "type": "ordinal", 
                                  "axis": null
                              },
                              "y":{
                                  "aggregate": "sum",
                                  "field": "value",
                                  "type": "quantitative"
                              },
                              "color": {"field": "location", "type": "nominal"}
                          }
                      },              
                    {
                      "transform": [{"filter": {"selection": "index"}}],
                      "encoding": {
                        "x": {"field": "sample date", "type": "temporal", "axis": null},
                        "color": {"value": "firebrick"}
                      },
                      "layer": [
                        {"mark": {"type": "rule", "strokeWidth": 0.5}},
                        {
                          "mark": {"type": "text", "align": "center", "fontWeight": 100},
                          "encoding": {
                            "text": {"field": "sample date", "timeUnit": "yearmonth"},
                            "y": {"value": 210}
                          }
                        }
                      ]
                    }
                  ]
              },
              
              {
                  "hconcat":[
                      {
                          "width": 200,
                          "transform": [{"filter": {"selections": "index"}}],
                          "title": "Iron readings August 2003",
                          "mark": {"type": "line", "tooltip": true},
                          "encoding": {
                            "column": {
                              "field": "location",
                              "type": "nominal"
                            },
                            "y": {
                              "aggregate": "average",
                              "field": "value",
                              "type": "quantitative"
                            },
                            "x": {
                              "field": "sample date",
                              "type": "temporal",
                              "scale": {}
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
                                  "Iron"
                                ]
                              }
                            },
                            {
                              "filter": {
                                "field": "location",
                                "oneOf": [
                                  "Busarakhan",                                  
                                  "Kannika",
                                  "Kohsoom",
                                  "Sakda"                                  
                                ]
                              }
                            }
                          ]
                      }
                  ]
              },
              {
                  "hconcat": [
                      {
                          "width": 200,
                          "title": "Copper readings August 2003",
                          "mark": {"type": "line", "tooltip": true},
                          "encoding": {
                            "column": {
                              "field": "location",
                              "type": "nominal"
                            },
                            "y": {
                              "aggregate": "average",
                              "field": "value",
                              "type": "quantitative"
                            },
                            "x": {
                              "timeUnit": "yearmonthdate",
                              "field": "sample date",
                              "type": "temporal",
                              "scale": {}
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
                                  "Copper"
                                ]
                              }
                            },
                            {
                              "filter": {
                                "field": "location",
                                "oneOf": [
                                  "Busarakhan",                                  
                                  "Kannika",
                                  "Kohsoom",
                                  "Sakda"
                                ]
                              }
                            }
                          ]
                      }
                  ]
              },
              {
                "hconcat": [
                      {
                          "width": 200,
                          "title": "Chromium readings August 2003",
                          "mark": {"type": "line", "tooltip": true},
                          "encoding": {
                            "column": {
                              "field": "location",
                              "type": "nominal"
                            },
                            "y": {
                              "aggregate": "average",
                              "field": "value",
                              "type": "quantitative"
                            },
                            "x": {
                              "timeUnit": "yearmonthdate",
                              "field": "sample date",
                              "type": "temporal",
                              "scale": {}
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
                                  "Chromium"
                                ]
                              }
                            },
                            {
                              "filter": {
                                "field": "location",
                                "oneOf": [
                                  "Busarakhan",
                                  "Kannika",
                                  "Kohsoom",
                                  "Sakda"
                                ]
                              }
                            }
                          ]
                      }
                  ]
              },
              {
                "hconcat": [
                      {
                          "width": 200,
                          "title": "Manganese readings August 2003",
                          "mark": {"type": "line", "tooltip": true},
                          "encoding": {
                            "column": {
                              "field": "location",
                              "type": "nominal"
                            },
                            "y": {
                              "aggregate": "average",
                              "field": "value",
                              "type": "quantitative"
                            },
                            "x": {
                              "timeUnit": "yearmonthdate",
                              "field": "sample date",
                              "type": "temporal",
                              "scale": {}
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
                                  "Manganese"
                                ]
                              }
                            },
                            {
                              "filter": {
                                "field": "location",
                                "oneOf": [
                                  "Busarakhan",
                                  "Kannika",
                                  "Kohsoom",
                                  "Sakda"
                                ]
                              }
                            }
                          ]
                      }
                  ]
              }
          ]
};
vegaEmbed('#vis1', anomalies);

var anomalies = {
        "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
        "description": "A simple bar chart with embedded data.",
        "width": 800,
        "height": 320,
        "data": {
        "url": "https://raw.githubusercontent.com/FireRayReh/MDX_CW_Dataset/main/CSD4060/cw2-dataset/readings.csv",
        "format": { "type": "csv" }
        },        
        "vconcat":[
            {
            "width": 800,
            "title": "Water Temperature",
            "mark": "line",
            "encoding": {
                "y": {
                  "aggregate": "sum",
                  "field": "value",
                  "type": "quantitative"
                },
                "x": {
                  "timeUnit": "year",
                  "field": "sample date",
                  "type": "temporal",
                  "scale": {}
                },
                "color": {
                  "field": "location",
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
            },
            {
                  "width": 800,
                  "title": "Total Hardness",
                  "mark": "line",
                  "encoding": {
                    "y": {
                      "aggregate": "sum",
                      "field": "value",
                      "type": "quantitative"
                    },
                    "x": {
                      "timeUnit": "year",
                      "field": "sample date",
                      "type": "temporal",
                      "scale": {}
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
                          "Total hardness"
                        ]
                      }
                    },
                    {
                      "filter": {
                        "field": "location",
                        "oneOf": [
                          "Chai"
                        ]
                      }
                    }
                  ]
                }
            ]
             
    
};
vegaEmbed('#vis4', anomalies);