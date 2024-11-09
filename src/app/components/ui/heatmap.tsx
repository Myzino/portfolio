// app/components/ui/heatmap.tsx
'use client';

import type { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { 
  ssr: false,
  loading: () => <div className="w-full h-64 bg-gray-900 animate-pulse rounded-lg" />
});

interface HeatmapData {
  name: string;
  data: { x: string; y: number }[];
}

const Heatmap: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const hours = Array.from({ length: 24 }, (_, i) => 
    `${i.toString().padStart(2, '0')}:00`
  );

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  const generateData = (day: string): { x: string; y: number }[] => {
    return hours.map((hour) => {
      const hourNum = parseInt(hour);
      
      if (
        (day === 'Friday' || day === 'Saturday' || day === 'Sunday') &&
        ((hourNum >= 18 && hourNum <= 23) || hourNum === 0)
    ) {
        return { x: hour, y: 90 };
    }
    if ((day === 'Wednesday') &&
        hourNum >= 10 && hourNum <= 15
        ) {
        return { x: hour, y:100}
      }
      if ((day === 'Monday' || day === 'Thursday'|| day === 'Tuesday') &&
        hourNum >= 5 && hourNum <= 10
        ) {
        return { x: hour, y:100}
      }
      if ((day === 'Saturday' || day === 'Sunday') &&
      hourNum >= 5 && hourNum <= 17
      ) {
      return { x: hour, y:74}
    }
    
      if (hourNum >= 5 && hourNum <= 17) {
        return { x: hour, y: 30 };
      }

      
      // Set medium activity (65) for all other times
      return { x: hour, y: 65 };
    });
  };

  const series: HeatmapData[] = days.map((day) => ({
    name: day,
    data: generateData(day)
  }));

  const options: ApexOptions = {
    chart: {
      type: 'heatmap',
      background: 'transparent',
      toolbar: {
        show: false
      },
      fontFamily: 'inherit',
    },
    theme: {
      mode: 'dark'
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#008FFB"],
    xaxis: {
      type: 'category',
      categories: hours,
      axisBorder: {
        show: true,
        color: '#444'
      },
      axisTicks: {
        show: true,
        color: '#444'
      },
      labels: {
        show: true,
        style: {
          colors: '#fff',
          fontSize: '12px'
        },
        rotate: -45,
        rotateAlways: false
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: '#fff',
          fontSize: '12px'
        }
      }
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 40,
              name: 'Low',
              color: '#FEF3E2'  // Light color for low activity
            },
            {
              from: 41,
              to: 70,
              name: 'Mid',
              color: '#FAB12F'  // Medium color for medium activity
            },
            {
              from: 71,
              to: 100,
              name: 'High',
              color: '#FA4032'  // Bright color for high activity
            }
          ]
        }
      }
    },
    grid: {
      padding: {
        right: 20
      }
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function(value: number) {
          return value.toString() + '%';
        }
      }
    }
  };

  if (!mounted) return null;

  return (
    <div className="w-full max-w-4xl p-4 bg-gray-900 rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-center text-white">
        My Weekly Coding Activity
      </h2>
      <div className="heatmap-container">
        <ReactApexChart
          options={options}
          series={series}
          type="heatmap"
          height={700}
          width={800}
        />
      </div>
    </div>
  );
};

export default Heatmap;