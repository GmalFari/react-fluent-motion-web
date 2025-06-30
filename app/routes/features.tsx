
import { motion } from 'framer-motion';
import { Trans } from '@lingui/macro';
import { Link } from '@react-router/react';
import IconArrowLeft from '~icons/lucide/arrow-left';
import IconCheck from '~icons/lucide/check';
import IconStar from '~icons/lucide/star';

export default function Features() {
  const technicalFeatures = [
    'React Router v7 with SSR support',
    'TypeScript for type safety',
    'Vite for lightning-fast development',
    'Tailwind CSS for utility-first styling',
    'LinguiJS for internationalization (Arabic & English)',
    'Framer Motion for smooth animations',
    'Unplugin Icons for optimized icon usage',
    'ESLint & Prettier for code quality',
    'PWA capabilities with offline support',
    'Cloudflare Workers deployment ready',
    'Advanced performance optimizations',
    'Code splitting and lazy loading',
  ];

  const performanceFeatures = [
    'Bundle size optimization with tree shaking',
    'Image optimization and lazy loading',
    'Service Worker caching strategies',
    'Critical CSS inlining',
    'Prefetching and preloading',
    'Runtime performance monitoring',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link
              to="/home"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <IconArrowLeft className="w-5 h-5 mr-2" />
              <Trans>Back to Home</Trans>
            </Link>
          </div>
        </div>
      </nav>

      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <Trans>Technical Features</Trans>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <Trans>
                Comprehensive overview of all the modern technologies and optimizations 
                integrated into this application
              </Trans>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <IconStar className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  <Trans>Core Technologies</Trans>
                </h2>
              </div>
              <ul className="space-y-3">
                {technicalFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    className="flex items-center"
                  >
                    <IconCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                  <IconStar className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  <Trans>Performance Optimizations</Trans>
                </h2>
              </div>
              <ul className="space-y-3">
                {performanceFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                    className="flex items-center"
                  >
                    <IconCheck className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                <Trans>Ready for Production</Trans>
              </h3>
              <p className="text-lg opacity-90 mb-6">
                <Trans>
                  This application is optimized for deployment on Cloudflare Workers 
                  with full SSR support and edge computing capabilities
                </Trans>
              </p>
              <Link
                to="/home"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <Trans>Get Started</Trans>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
