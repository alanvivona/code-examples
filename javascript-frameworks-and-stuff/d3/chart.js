document.addEventListener("DOMContentLoaded", function() {
   
   // Chart: core = dynamic width columns
    var data =  [
        {name: "dept1", widthP: 10, heightP: 100},
        {name: "dept2", widthP: 20, heightP: 80},
        {name: "dept3", widthP: 30, heightP: 30},
        {name: "dept4", widthP: 10, heightP: 40},
        {name: "dept5", widthP: 10, heightP: 75},
        {name: "dept6", widthP: 20, heightP: 5}
    ];

    var svg = d3.select('svg.chart')
        .attr('width', "100%")
        .attr('height', "100%");

    var lastColumnPosition = { x: 0, y: 0};

    svg.selectAll('rect')
    .data(data, function(d,i) { return d; })
    .enter().append('rect')
        .attr('x', function(d,i) {
            var x = lastColumnPosition.x;
            lastColumnPosition.x += d.widthP;
            return x + "%"; 
        })
        .attr('y', function(d,i) { 
            return lastColumnPosition.y + (100 - d.heightP) + "%"; 
        })
        .attr('width', function(d,i) {
            return d.widthP + "%"; 
        })
        .attr('height', function(d,i) {
            return d.heightP + "%"; 
        })
        .text(function(d,i) { 
            return d.name; 
        });

    
    // Metric lines
    var metricLines =  [
        {name: "metric1", heightP: 75},
        {name: "metric2", heightP: 35},
    ];

    metricLines.forEach(metric => {
        svg.append("line")
        .attr("x1", "0%")
        .attr("x2", "100%")
        .attr("y1", metric.heightP + "%")
        .attr("y2", metric.heightP + "%")
        .attr("stroke-width", 1)
        .attr("stroke", "orange")
        .style("stroke-dasharray", ("3, 3"));
    });

    // Axis
    /*
    // need corrections - axis are not displayed correctly yet
    var scales = {};
    scales.x = d3.scaleOrdinal([0, data.length-1]);
    scales.y = d3.scaleLinear().range([100, 0]);

    var xAxis = d3.axisBottom(scales.x);
    var yAxis = d3.axisLeft(scales.y);

    svg.append("g")
        .attr("class", "x axis")
        //.attr("transform", "translate(0,100%)")
        .call(xAxis);
    
    svg.append("g")
        .attr("class", "y axis")
        //.attr("transform", "translate(100%, 0)")
        .call(yAxis);
    */
    
});