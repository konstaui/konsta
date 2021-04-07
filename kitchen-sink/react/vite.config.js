import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  base: '',
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      'tailwind-mobile': path.resolve(__dirname, '../../src'),
    },
  },
};
