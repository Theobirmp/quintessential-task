import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import AppContainer from './components/AppContainer';
import ToggleDarkThemeSwitch from './components/ToggleDarkThemeSwitch';
import PageContainer from './components/PageContainer';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import PageVerticalContainer from './components/PageVerticalContainer';
import Warehouse from './pages/Warehouse';
import AddItem from './pages/AddItem';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  return (
    <AppContainer>
      <ToggleDarkThemeSwitch />
      <PageContainer>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/home"
              element={
                <>
                  <Sidebar />
                  <PageVerticalContainer>
                    <Topbar />
                    <Home />
                  </PageVerticalContainer>
                </>
              }
            />
            <Route
              path="/warehouse:warehouseNumber"
              element={
                <>
                  <Sidebar />
                  <PageVerticalContainer>
                    <Topbar />
                    <Warehouse />
                  </PageVerticalContainer>
                </>
              }
            />
            <Route
              path="/addItem"
              element={
                <>
                  <Sidebar />
                  <PageVerticalContainer>
                    <Topbar />
                    <AddItem />
                  </PageVerticalContainer>
                </>
              }
            />
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
        {/* </PageVerticalContainer> */}
      </PageContainer>
    </AppContainer>
  );
}

export default App;
