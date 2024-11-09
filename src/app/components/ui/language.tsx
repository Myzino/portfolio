// pages/ApexChart.tsx

import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React, { useMemo } from 'react';

// Load ApexCharts dynamically to support Next.js SSR
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ApexChart: React.FC = () => {
  // Memoize options to avoid recreating them on each render
  const chartOptions: ApexOptions = useMemo(() => ({
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        borderRadiusApplication: 'end',
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['React', 'Next.js', 'Python', 'Java', 'Laravel'], // Text labels to avoid issues with JSX elements
    },
  }), []);

  const series = useMemo(() => [
    {
      data: [400, 430, 448, 470, 540],
    },
  ], []);

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartOptions} series={series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
