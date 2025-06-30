
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ChartContainer from '@/components/Charts/ChartContainer';
import { ArrowLeft, BarChart3, LineChart, PieChart } from 'lucide-react';

// Sample data for charts
const lineData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
];

const barData = [
  { name: 'Product A', value: 120 },
  { name: 'Product B', value: 200 },
  { name: 'Product C', value: 150 },
  { name: 'Product D', value: 300 },
  { name: 'Product E', value: 250 },
];

const pieData = [
  { name: 'Desktop', value: 45 },
  { name: 'Mobile', value: 35 },
  { name: 'Tablet', value: 20 },
];

export default function Charts() {
  const [activeTab, setActiveTab] = useState('line');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/home">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Interactive Charts
          </h1>
          <p className="text-lg text-gray-600">
            Explore our optimized Recharts implementation with lazy loading
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Chart Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="line" className="flex items-center gap-2">
                  <LineChart className="w-4 h-4" />
                  Line Chart
                </TabsTrigger>
                <TabsTrigger value="bar" className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Bar Chart
                </TabsTrigger>
                <TabsTrigger value="pie" className="flex items-center gap-2">
                  <PieChart className="w-4 h-4" />
                  Pie Chart
                </TabsTrigger>
              </TabsList>

              <TabsContent value="line" className="mt-6">
                <ChartContainer 
                  type="line" 
                  data={lineData} 
                  title="Monthly Revenue Trend"
                />
              </TabsContent>

              <TabsContent value="bar" className="mt-6">
                <ChartContainer 
                  type="bar" 
                  data={barData} 
                  title="Product Sales Comparison"
                />
              </TabsContent>

              <TabsContent value="pie" className="mt-6">
                <ChartContainer 
                  type="pie" 
                  data={pieData} 
                  title="Device Usage Distribution"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Optimizations</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Lazy loading with React.Suspense</li>
                <li>• Code splitting by chart type</li>
                <li>• Minimal Recharts imports</li>
                <li>• Tree shaking optimization</li>
                <li>• Responsive container usage</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bundle Size Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Charts are loaded only when needed, reducing initial bundle size.
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-800">
                  ✓ Optimized for production builds
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
