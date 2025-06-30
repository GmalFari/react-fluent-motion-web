
import { motion } from 'framer-motion';
import { Trans, t } from '@lingui/macro';
import { useLingui } from '@lingui/react';
import { useState } from 'react';
import { Link } from '@react-router/react';
import IconHome from '~icons/lucide/home';
import IconGlobe from '~icons/lucide/globe';
import IconZap from '~icons/lucide/zap';
import IconCode from '~icons/lucide/code';
import IconPalette from '~icons/lucide/palette';
import IconRocket from '~icons/lucide/rocket';
import LanguageSwitcher from '../components/LanguageSwitcher';
import PerformanceMetrics from '../components/PerformanceMetrics';

export default function Home() {
  const { _ } = useLingui();
  const [isLoaded, setIsLoaded] = useState(false);

  const features = [
    {
      icon: IconZap,
      title: _('High Performance'),
      description: _('Optimized for speed with advanced bundling and caching strategies'),
    },
    {
      icon: IconGlobe,
      title: _('Internationalization'),
      description: _('Full support for Arabic and English with RTL layout'),
    },
    {
      icon: IconCode,
      title: _('Modern Stack'),
      description: _('React Router v7, TypeScript, Vite, and Tailwind CSS'),
    },
    {
      icon: IconPalette,
      title: _('Beautiful UI'),
      description: _('Smooth animations with Framer Motion and modern design'),
    },
    {
      icon: IconRocket,
      title: _('Production Ready'),
      description: _('SSR, PWA, and Cloudflare deployment ready'),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-2"
            >
              <IconHome className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">
                <Trans>Modern React App</Trans>
              </span>
            </motion.div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      <main className="relative">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="py-20 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto text-center">
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <Trans>Next Generation</Trans>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}
                  <Trans>React Application</Trans>
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              <Trans>
                Built with cutting-edge technologies including React Router v7, SSR, 
                internationalization, and advanced performance optimizations
              </Trans>
            </motion.p>

            <motion.div variants={itemVariants} className="mb-16">
              <Link
                to="/features"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Trans>Explore Features</Trans>
                <IconRocket className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <Trans>Powerful Features</Trans>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                <Trans>Everything you need for a modern, high-performance web application</Trans>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <PerformanceMetrics />
      </main>
    </div>
  );
}
