import React, { useEffect, useRef, useState, useMemo } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Firestore from "./components/utils/Firestore";
import Navbar from './components/utils/navbarNew';
import Footer from './components/utils/Footer';
import Home from './components/home/Home';
import Background from './components/utils/background';
import { AnimatePresence } from "framer-motion";

const firestore = new Firestore();

function App() {
  return (
    <BrowserRouter>
      <Background />
      <Navbar />
      <MainRoutes />
      <Footer />
    </BrowserRouter>
  );
}

function MainRoutes() {
  const location = useLocation();

    const [spon, setSpon] = useState([]);
    const getSpon = useMemo(() => async () => {
      await firestore.readDocuments("sponsori").then((res) => {
        setSpon(res);
      }).catch(er=>{
        console.log(er);
      });
    }, [setSpon]);
    const [premii, setPremii] = useState([]);
    const getPremii = useMemo(() => async () => {
      await firestore.sortdata("premii", "an", "desc").then((res) => {
        setPremii(res);
      });
    }, [setPremii]);

    const [apps, setApps] = useState([]);
    const getApps = useMemo(() => async () => {
      await firestore.readDocuments("aplicatii").then((res) => {
        setApps(res);
      }).catch(er => {
        console.log(er);
      })
    }, [setApps]);

    useEffect(() => {
      getApps();
      getSpon();
      getPremii();
    }, [getApps, getSpon, getPremii]);


  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home key={location.pathname} />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
