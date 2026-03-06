// Create React App with TypeScript scaffold
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PolicySearch from './pages/PolicySearch';
import CreateSR from './pages/CreateSR';
import './index.css';

const App = () => {
    return (
        <I18nextProvider i18n={i18n}>
            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/policy-search' element={<PolicySearch />} />
                    <Route path='/create-sr' element={<CreateSR />} />
                </Routes>
            </Router>
        </I18nextProvider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);