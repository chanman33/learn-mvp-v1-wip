import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SunburstChart = ({ data }) => {
  const chartRef = useRef();

  // Hypothetical function to determine if the visual element represented by the data node is in view
  // function isElementInView(nodeData, sequence) {
  //   // This function needs to check based on your visualization's logic.
  //   // For example, you might check if the nodeData's visual representation is currently within the viewport or another specific view.
  //   // For now, let's assume any node data passed to the function is considered "in view".
  //   // You would write your actual in-view logic here.
  //   return sequence.indexOf(nodeData) >= 0;
  // }

  useEffect(() => {
    if (data) {
      console.log('Fetched JSON data in component:', data); // Log the data
      // Specify the chart’s dimensions. 
      //*****Note, chart will eventually need to auto size based on amount of data and screen size.
      const width = 1000;
      const height = width;
      const radius = width / 6;


      // Create the color scale.
      const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1));

      // Compute the layout.
      const hierarchy = d3.hierarchy(data)
        .sum(d => d.value)
        .sort((a, b) => b.value - a.value);
      const root = d3.partition()
        .size([2 * Math.PI, hierarchy.height + 1])
        (hierarchy);
      root.each(d => d.current = d);

      // Create the arc generator.
      const arc = d3.arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
        .padRadius(radius * 1.5)
        .innerRadius(d => d.y0 * radius)
        .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))

      // Create the SVG container.
      const svg = d3.select(chartRef.current)
        .attr("viewBox", [-width / 2, -height / 2, width, width])
        .style("font", "10px sans-serif");

      // Append the arcs.
      const path = svg
        .append("g")
        .selectAll("path")
        .data(root.descendants().slice(1))
        .join("path")
        .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
        .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
        .attr("pointer-events", d => arcVisible(d.current) ? "all" : "none")

        .attr("d", d => arc(d.current));

      // Make them clickable if they have children.
      path.filter(d => d.children)
        .style("cursor", "pointer")
        .on("click", clicked);

      const format = d3.format(",d");
      path.append("title")
        .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

      const label = svg
        .append("g")
        .attr("pointer-events", "none")
        .attr("text-anchor", "middle")
        .style("user-select", "none")
        .selectAll("text")
        .data(root.descendants().slice(1))
        .join("text")
        .attr("dy", "0.35em")
        .attr("fill-opacity", d => +labelVisible(d.current))
        .attr("transform", d => labelTransform(d.current))
        .text(d => d.data.name);

      const parent = svg
        .append("circle")
        .datum(root)
        .attr("r", radius)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("click", clicked);

      // *** NOOB ATTEMPT TO EDIT THE CHART _ WILL REVERT BACK MOST LIKELY

      //Define mousearc function...
      const mousearc = d3
        .arc()
        .startAngle(d => d.x0)
        .endAngle(d => d.x1)
        .innerRadius(d => Math.sqrt(d.y0))
        .outerRadius(radius)

      // Trying to create a label in the enter of the chart...
      // Make this into a view, so that the currently hovered sequence is available to the breadcrumb
      const element = svg.node();
      element.value = { sequence: [], percentage: 0.0 };

      const middleLabel = svg
        .append("text")
        .attr("text-anchor", "middle")
        .attr("fill", "#888")
        .style("visibility", "hidden");

      middleLabel
        .append("tspan")
        .attr("class", "percentage")
        .attr("x", 0)
        .attr("y", 0)
        .attr("dy", "-0.1em")
        .attr("font-size", "3em")
        .text("");

      middleLabel
        .append("tspan")
        .attr("x", 0)
        .attr("y", 0)
        .attr("dy", "1.5em")
        .text("of your Learn Portfolio");


      // Handle mouse enter and leave color and labels
      path.filter(d => d.children)
        .on("mouseleave", () => {
          // path.attr("fill-opacity", 1);
          middleLabel.style("visibility", "hidden");
          // Update the value of this view
          element.value = { sequence: [], percentage: 0.0 };
          element.dispatchEvent(new CustomEvent("input"));
        })
        .on("mouseenter", (event, d) => {

          // Get the ancestors of the current segment, minus the root
          const sequence = d
            .ancestors()
            .reverse()
            .slice(1);
          // Highlight the ancestors
          // path.attr("fill-opacity", node => {

          //   // *****TODO chandler: figure out if node is in view or not. Ignore if not
          //   if (isElementInView(node, sequence)) {
          //     console.log('The node is in view.');
          //     return 1.0;
          //   } else {
          //     console.log('The node is not in view, ignore it.');
          //     return 0.3;
          //   }
          // Old update fill-opacity logic
          // let isNodeInSequence = sequence.indexOf(node) >= 0;
          // if (isNodeInSequence) {
          //   return 1.0;
          // }
          // return 0.3;
          const percentage = ((100 * d.value) / root.value).toPrecision(3);
          middleLabel
            .style("visibility", null)
            .select(".percentage")
            .text(percentage + "%");
          // Update the value of this view with the currently hovered sequence and percentage
          element.value = { sequence, percentage };
          element.dispatchEvent(new CustomEvent("input"));

        })
        .selectAll("route")
        .data(
          root.descendants().filter(d => {
            // Don't draw the root node, and for efficiency, filter out nodes that would be too small to see
            return d.depth && d.x1 - d.x0 > 0.001;
          })
        )
        .join("route")
        .attr("d", mousearc);

      //Data isn't getting passed back into the event or SVG... or no data is being read on mouseenter or mouse off...







      // Handle zoom on click.
      function clicked(event, p) {
        parent.datum(p.parent || root);

        root.each(d => d.target = {
          x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
          x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
          y0: Math.max(0, d.y0 - p.depth),
          y1: Math.max(0, d.y1 - p.depth)
        });

        const t = svg.transition().duration(750);

        // Transition the data on all arcs, even the ones that aren’t visible,
        // so that if this transition is interrupted, entering arcs will start
        // the next transition from the desired position.
        path.transition(t)
          .tween("data", d => {
            const i = d3.interpolate(d.current, d.target);
            return t => d.current = i(t);
          })
          .filter(function (d) {
            return +this.getAttribute("fill-opacity") || arcVisible(d.target);
          })
          .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
          .attr("pointer-events", d => arcVisible(d.target) ? "auto" : "none")

          .attrTween("d", d => () => arc(d.current));

        label.filter(function (d) {
          return +this.getAttribute("fill-opacity") || labelVisible(d.target);
        }).transition(t)
          .attr("fill-opacity", d => +labelVisible(d.target))
          .attrTween("transform", d => () => labelTransform(d.current));
      }

      function arcVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
      }

      function labelVisible(d) {
        return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
      }

      function labelTransform(d) {
        const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
        const y = (d.y0 + d.y1) / 2 * radius;
        return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
      }
    }
  }, [data]);

  return (
    <div style={{ width: '900px', height: '900px' }}>
      {/* TODO remove style= above after fix CSS */}
      <svg ref={chartRef}></svg>
    </div>

  );
};

export default SunburstChart;