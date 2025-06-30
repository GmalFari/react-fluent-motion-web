
import React, { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const LazyLineChart = React.lazy(() => import('./LineChart'));
const LazyBarChart = React.lazy(() => import('./BarChart'));
const LazyPieChart = React.lazy(() => import('./PieChart'));

interface ChartContainerProps {
  type: 'line' | 'bar' | 'pie';
  data: any[];
  title: string;
}

const ChartContainer: React.FC<ChartContainerProps> = ({ type, data, title }) => {
  const renderChart = () => {
    switch (type) {
      case 'line':
        return <LazyLineChart data={data} />;
      case 'bar':
        return <LazyBarChart data={data} />;
      case 'pie':
        return <LazyPieChart data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
      <Suspense 
        fallback={
          <div className="w-full h-64 space-y-2">
            <Skeleton className="h-4 w-3/4 mx-auto" />
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
          </div>
        }
      >
        {renderChart()}
      </Suspense>
    </div>
  );
};

export default ChartContainer;
