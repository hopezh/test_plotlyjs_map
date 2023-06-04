import './style.css'
// import Plotly from 'plotly.js-dist'
// import * as d3 from 'd3'
import * as dfd from "danfojs"
// import * as dfd from "danfojs-node"

s = new dfd.Series([1, 2, 4, undefined, 6, 7])
s.print()

// const myDiv = document.getElementById("plot")

// d3.csv(
//     "https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv",
//     function(err, rows) {
//         function unpack(rows, key) {
//             return rows.map(function(row) {
//                 return row[key];
//             });
//         }
//
//         var data = [
//             {
//                 type: "scattermapbox",
//                 text: unpack(rows, "Globvalue"),
//                 lon: unpack(rows, "Lon"),
//                 lat: unpack(rows, "Lat"),
//                 marker: { color: "fuchsia", size: 4 }
//             }
//         ];
//
//         var layout = {
//             dragmode: "zoom",
//             mapbox: { style: "open-street-map", center: { lat: 38, lon: -90 }, zoom: 3 },
//             margin: { r: 0, t: 0, b: 0, l: 0 }
//         };
//
//         Plotly.newPlot(myDiv, data, layout);
//     }
// );
