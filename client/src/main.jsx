import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import store from '../src/redux/reducers/store.js'
import { GoogleOAuthProvider } from "@react-oauth/google"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const queryClient=new QueryClient();



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <MantineProvider>
     
    <Provider store={store}>
    <App />
    </Provider>
   
    </MantineProvider>
    </QueryClientProvider>
  </StrictMode>,
)
