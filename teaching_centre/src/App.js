import "./common-styles/App.scss";
import Header from "./components/Layout/Components/Header";
import Footer from "./components/Layout/Components/Footer";
import SideNavbar from "./components/Layout/Components/SideNavbar";
import * as React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { studentUrls } from "./Constants/URLConstants/StudentUrls";
import { CourseUrls } from "./Constants/URLConstants/CourseUrls";
import { SectionUrls } from "./Constants/URLConstants/SectionUrls";
import { TeacherUrls } from "./Constants/URLConstants/TeacherUrls";
import { PaymentUrls } from "./Constants/URLConstants/PaymentUrls";
   
function App() {
  const Loading = () => <p>Loading ...</p>;
  const LazyStudentComponent = React.lazy(() => import("./components/Student/Components/StudentRouter"));
  const LazyCourseComponent = React.lazy(() => import("./components/Course/Components/CourseRouter"));
  const LazySectionComponent = React.lazy(() => import("./components/Section/Components/SectionRouter"));
  const LazyTeacherComponent = React.lazy(() => import("./components/Teacher/Components/TeacherRouter"));
  const LazyPaymentComponent = React.lazy(() => import("./components/Payment/Components/PaymentRouter"));
  return (
    <div className="mainContainer">
      
      <BrowserRouter>
        <Header/> 
         <SideNavbar/>
        <main className="mainBody">
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route exact path="/" element={<Header name="Component"/>} />
            <Route exact path={studentUrls.ROUTER+"/*"} element={<LazyStudentComponent/>} />
            <Route exact path={CourseUrls.ROUTER+"/*"} element={<LazyCourseComponent/>} />
            <Route exact path={SectionUrls.ROUTER+"/*"} element={<LazySectionComponent/>} />
            <Route exact path={TeacherUrls.ROUTER+"/*"} element={<LazyTeacherComponent/>} />
            <Route exact path={PaymentUrls.ROUTER+"/*"} element={<LazyPaymentComponent/>} />
          </Routes>
          </React.Suspense>   
        </main>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
