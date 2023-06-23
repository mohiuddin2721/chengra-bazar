import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import AuthProvider from './contexts/AuthProvider';

const queryClient = new QueryClient()



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>

  //   <BrowserRouter>
  //     <QueryClientProvider client={queryClient}>
  //       <AuthProvider>
  //         <App />
  //       </AuthProvider>
  //     </QueryClientProvider>
  //   </BrowserRouter>
)
