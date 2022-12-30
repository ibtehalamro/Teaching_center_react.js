import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { useResolvedPath } from "react-router";
import StudentHome from "./StudentHome";
import { studentUrls } from "../../../Constants/URLConstants/StudentUrls";
import StudentForm from "./StudentForm";
import StudentsList from "./StudentsList";

export default function StudentRouter() {
  const pathname = useResolvedPath("").pathname;
  return (
    <div className="student-wrapper">
      <div className="buttons-container">
        <NavLink className="cross-fade-button" to={`${pathname}${studentUrls.HOME}`}>Home</NavLink>
        <NavLink className="cross-fade-button" to={`${pathname}${studentUrls.NEW_STUDENT_FORM}`}>Add Student</NavLink>
        <NavLink className="cross-fade-button" to={`${pathname}${studentUrls.STUDENTS_LIST}`}>Students List</NavLink>
      </div>

      <Routes>
        <Route exact path={`${studentUrls.HOME}`} element={<StudentHome />} />
        <Route exact path={`${studentUrls.NEW_STUDENT_FORM}`} element={<StudentForm />} />
        <Route exact path={`${studentUrls.STUDENTS_LIST}`} element={<StudentsList />} />
      </Routes>
    </div>
  );
}
