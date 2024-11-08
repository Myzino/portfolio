'use client'; // This makes the component client-side only

import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

// Dynamically import ReactApexChart with SSR disabled
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChart: React.FC = () => {
  // Define categories for Y-Axis (time of day)
  const timeOfDay = ['Morning', 'Lunch', 'Evening', 'Midnight'];

  // Generate series data with conditional color assignments
  const [series, setSeries] = useState([
    {
      name: 'Activity Level',
      data: generateData(24),
    },
  ]);

  // Chart configuration options
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'heatmap',
    },
    dataLabels: {
      enabled: false,
    },
    colors: ['#be29ec', '#f0f0f0'], // Violet color for off-hours, light grey for specified hours
    title: {
      text: 'Hourly Activity Heatmap',
      style: {
        color: '#ffffff', // White title text
      },
    },
    xaxis: {
      categories: Array.from({ length: 24 }, (_, i) => formatHour(i)), // Hours from 1 to 24 with AM/PM
      title: {
        text: 'Hour of the Day',
        style: {
          color: '#ffffff', // White x-axis title text
        },
      },
      labels: {
        style: {
          colors: '#ffffff', // White labels for x-axis
        },
      },
    },
    yaxis: {
      labels: {
        show: true,
        formatter: (value: any) => timeOfDay[value], // Custom labels for y-axis
        style: {
          colors: '#ffffff', // White labels for y-axis
        },
      },
      title: {
        text: 'Time of Day',
        style: {
          color: '#ffffff', // White y-axis title text
        },
      },
    },
    grid: {
      borderColor: '#f0f0f0', // Border color for grid lines
      row: {
        colors: ['#f7f7f7', '#ffffff'], // Alternating row colors
        opacity: 0.5,
      },
      column: {
        opacity: 0, // No column lines
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
      },
      custom: function({ seriesIndex, dataPointIndex, w }) {
        return `<div style="color: white; padding: 10px; background: rgba(0, 0, 0, 0.7); border-radius: 5px;">
                  <span>Activity: ${w.config.series[seriesIndex].data[dataPointIndex]}</span>
                </div>`;
      },
    },
  };

  // Data generation function with conditional violet coloring based on time
  function generateData(count: number) {
    const data = Array.from({ length: count }, (_, i) => {
      if (i >= 5 && i <= 11 || i >= 12 && i <= 17) {
        // For 5 AM to 11 AM and 12 PM to 5 PM, keep activity low
        return Math.floor(Math.random() * 30); // Low activity during these times
      } else {
        // High activity (violet) for other times
        return 80 + Math.floor(Math.random() * 20);
      }
    });
    return data;
  }

  // Function to format hours to AM/PM
  function formatHour(hour: number): string {
    const ampm = hour < 12 ? 'AM' : 'PM';
    const hourFormatted = hour % 12 === 0 ? 12 : hour % 12;
    return `${hourFormatted} ${ampm}`;
  }

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="heatmap"
          height={600}
          width={850}
        />
      </div>
    </div>
  );
};

export default ApexChart;
