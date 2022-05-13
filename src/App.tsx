import React, { Fragment, lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import Header from "./components/header";
import Navbar from "./components/navbar";

const HomePage = lazy(() => import("./pages/home"));
const HotelsPage = lazy(() => import("./pages/hotels"));
const HotelView = lazy(() => import("./pages/hotels/hotel-view"));

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Header isExtended={window.location.pathname === "/"} />

      <BrowserRouter>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hotels" element={<HotelsPage />} />
            <Route path="/hotels/:id" element={<HotelView />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
