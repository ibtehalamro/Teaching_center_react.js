import React, { useEffect, useState } from "react";
import { PopUp } from "../../Layout/Components/Popup";
import { apiStudentUrls } from "../../../Constants/URLConstants/StudentUrls";


const StudentsList = ({ studentStyle, showSections }) => {
  const [students, setStudents] = useState(null);
  const [success, setSuccess] = useState(false);

  const [update, setUpdate] = useState("no");
  const [studentId, setStudentId] = useState(0);

  const getStudentsList = async (fetched) => {
    if (!fetched) {
      return;
    }
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    try {
      const response = await fetch(
      apiStudentUrls.API_STUDENTS_LIST,
        requestOptions
      );
      const json = await response.json();
        setSuccess(true);
        setStudents(json.data);
    
    } catch (error) {
      setSuccess(false);
    }
  };
  useEffect(() => {
    let fetched = true;
    getStudentsList(fetched);
    return () => (fetched = false);
  }, [students, update]);

  const viewSectionsForStudent = (studentId) => {

    showSections(studentId);
  };
  return (
    <>
      {update === "yes" && <PopUp close={() => { setUpdate("no") }}>update student form</PopUp>}
      {(students === null ||
        students.length === 0 || !success) && <div>No students</div>}
      {students != null &&
        students.length > 0 &&
        students.map((element) => (
          <div
            key={element.id}
            className={studentStyle.student__container__card}
          >
            <div>
              <div>
                <div className={studentStyle.name}>
                  {element.firstName} {element.secondName} {element.lastName}
                </div>
                <br />
                <button className={studentStyle.studentSectionsButton} onClick={() => viewSectionsForStudent(element.id)}>
                  Sections
                </button>
              </div>
              <div className={studentStyle.editLink}>
                <button onClick={() => { setStudentId(element.id); setUpdate("yes"); }}>Edit</button>
              </div>

            </div>
          </div>
        ))}
    </>
  );





};




export default StudentsList;
