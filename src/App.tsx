import { Navigate, Route, Routes } from 'react-router-dom';
import routesPages from './config/routes/routesPages';
import './App.css';
import { Provider } from 'react-redux';
import store from "./redux/store.js"
import React from 'react';
function App() {
  return (
    <Provider store={store}>  
      <Routes>
        {routesPages.map((route, index) => {
          const Layout = route.layout || React.Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <route.component />
                </Layout>
              }
            />
          );
        })}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Provider>
  );
}

export default App;
