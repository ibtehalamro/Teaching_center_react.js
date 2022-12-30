import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useResolvedPath } from "react-router";
import { SectionUrls } from "../../../Constants/URLConstants/SectionUrls";
import SectionHome from "./SectionHome";
import NewSectionForm from "./NewSectionForm";
import SectionsList from "./SectionsList";

const SectionRouter=()=>{
    const pathname = useResolvedPath("").pathname;
    return (
      <div className="course-wrapper">
        <div className="buttons-container">
          <NavLink className="cross-fade-button" to={`${pathname}${SectionUrls.HOME}`}>Home</NavLink>
          <NavLink className="cross-fade-button" to={`${pathname}${SectionUrls.NEW_SECTION_FORM}`}>New Section</NavLink>
          <NavLink className="cross-fade-button" to={`${pathname}${SectionUrls.SECTION_LIST}`}>Sections List</NavLink>
         </div>
  
        <Routes>
          <Route exact path={`${SectionUrls.HOME}`} element={<SectionHome />} />
          <Route exact path={`${SectionUrls.NEW_SECTION_FORM}`} element={<NewSectionForm/>} />
          <Route exact path={`${SectionUrls.SECTION_LIST}`} element={<SectionsList/>} />
         </Routes>
      </div>
    );
}

export default SectionRouter;