// routes
// import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import { BaseOptionChartStyle } from './components/chart/BaseOptionChart';

import DashboardApp from './pages/DashboardApp';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeProvider>
      <BaseOptionChartStyle />
      <DashboardApp />
    </ThemeProvider>
  );
}
