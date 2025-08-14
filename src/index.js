import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18next.js'
import { ContextProvider } from './context/Context';
import { ApiProvider } from './context/api';
import { LangProvider } from './context/language';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import App from './App';

ReactDOM.render(
   <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}><div>Loading...</div></div>}>
   <ContextProvider>
   <ApiProvider>
   <LangProvider>
   <App />
   </LangProvider>
   </ApiProvider>
   </ContextProvider>
   </Suspense>, document.getElementById('root'));
   