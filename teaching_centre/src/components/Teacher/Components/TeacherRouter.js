import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useResolvedPath } from "react-router";
import { TeacherUrls } from "../../../Constants/URLConstants/TeacherUrls";
import TeacherHome from "./TeacherHome";
import NewTeacherForm from "./NewTeacherForm";
import TeachersList from "./TeachersList";
const TeacherRouter=()=>{
    const pathname = useResolvedPath("").pathname;
 return   <div className="teacher-wrapper">
    <div className="buttons-container">
      <NavLink className="cross-fade-button" to={`${pathname}${TeacherUrls.HOME}`}>Home</NavLink>
      <NavLink className="cross-fade-button" to={`${pathname}${TeacherUrls.NEW_TEACHER_FORM}`}>New Teacher</NavLink>
      <NavLink className="cross-fade-button" to={`${pathname}${TeacherUrls.TEACHER_LIST}`}>Teachers List</NavLink>
     </div>

    <Routes>
      <Route exact path={`${TeacherUrls.HOME}`} element={<TeacherHome />} />
      <Route exact path={`${TeacherUrls.NEW_TEACHER_FORM}`} element={<NewTeacherForm/>} />
      <Route exact path={`${TeacherUrls.TEACHER_LIST}`} element={<TeachersList/>} />
     </Routes>
     </div>
}

export default TeacherRouter;