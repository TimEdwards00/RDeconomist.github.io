var chartUK8 = {
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "description": "Coronavirus cases",
  "data": {
    "url": "https://api.coronavirus.data.gov.uk/v2/data?areaType=nation&metric=newCasesByPublishDate&metric=newDeaths28DaysByPublishDate&format=csv",
    "format": {"type": "csv"}
  },

  "height": 150,
  
  "width": 150,
  
  "mark": {"type": "bar", "color":"#4f009f"},
  
  "transform": [
     {
      "filter": {
        "field": "date",
        "range": [
          {"year": 2020, "month": "feb", "date": 1},
          {"year": 2020, "month": "dec", "date": 30}
        ]
      }
    }
  ],
  
  "encoding": {
    
    "x": {"field": "date", "type": "temporal", "title": "Date"},
    
    "y": {
      "field": "newDeaths28DaysByPublishDate",
      "type": "quantitative",
      "title": null
    
    },

    "facet": {
      "field": "areaName",
      "type": "nominal",
      "columns": 2,
      "title": null
    },
    "tooltip": [
      {"field": "date", "type": "temporal", "title": "Date"},
      {
        "field": "rolling_mean",
        "type": "quantitative",
        "title": "Cases, 7-day average",
        "format": ",.0f"
      },
      {
        "field": "newCasesBySpecimenDate",
        "type": "quantitative",
        "title": "Cases",
        "format": ",.0f"
      }
    ]

    
  },
  "resolve": {"scale": {"y": "independent"}}
}
;

vegaEmbed('#visUK8', chartUK8, {"actions":false});
