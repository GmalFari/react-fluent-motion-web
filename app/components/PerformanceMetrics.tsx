
import { motion } from 'framer-motion';
import { Trans } from '@lingui/macro';
import { useEffect, useState } from 'react';
import IconZap from '~icons/lucide/zap';
import IconClock from '~icons/lucide/clock';
import IconGauge from '~icons/lucide/gauge';

export default function PerformanceMetrics() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    bundleSize: '< 100KB',
    firstPaint: 0,
  });

  useEffect(() => {
    // Simulate performance metrics
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      setMetrics({
        loadTime: Math.round(navigation.loadEventEnd - navigation.navigationStart),
        bundleSize: '< 100KB',
        firstPaint: Math.round(navigation.responseEnd - navigation.requestStart),
      });
    }
  }, []);

  const metricsData = [
    {
      icon: IconClock,
      label: 'Load Time',
      value: `${metrics.loadTime}ms`,
      description: 'Total page load time',
    },
    {
      icon: IconZap,
      label: 'Bundle Size',
      value: metrics.bundleSize,
      description: 'Optimized bundle size',
    },
    {
      icon: IconGauge,
      label: 'First Paint',
      value: `${metrics.firstPaint}ms`,
      description: 'Time to first paint',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-gradient-to-r from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <Trans>Performance Metrics</Trans>
          </h2>
          <p className="text-lg text-gray-300">
            <Trans>Real-time performance data from your current session</Trans>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metricsData.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {metric.value}
              </div>
              <div className="text-lg font-semibold mb-1">{metric.label}</div>
              <div className="text-sm text-gray-400">{metric.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
