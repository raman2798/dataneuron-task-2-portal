import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './router';
import { queryClient } from './queryClient';
import { appStore } from './redux';
import { dataNeuronTheme } from './theme';

const App: FC = () => {
  return (
    <Provider store={appStore}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={dataNeuronTheme}>
          <CssBaseline />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
