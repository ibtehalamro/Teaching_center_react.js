import React from 'react';
import TextInput from '../../Form/TextInput';
import NumberInput from '../../Form/NumberInput';
import { apiStudentUrls } from "../../../Constants/URLConstants/StudentUrls";
 
export default function StudentForm() {

  const submit = async (event) => {
    event.preventDefault();
    const student = buildStudentJSONFromEvent(event);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: student,
    };
    const response = await fetch(apiStudentUrls.API_POST_STUDENT_FORM, requestOptions);
    const jsonResponse = await response.json();
    handleResponse(jsonResponse);
  };

  const handleResponse = (response) => {
    if (response.status === "ERROR") {
      alert("Student with same name exists.");
    }
    if (response.status === "SUCCESS") {
      alert("Student info saved successfully.");
      document.getElementById("addStudentForm").reset();
    }
  };
  const buildStudentJSONFromEvent = (event) => {
    const { firstName, secondName, lastName, city, mobileNumber } =
      event.target;
    const student = {
      name: {
        firstName: firstName.value,
        secondName: secondName.value,
        lastName: lastName.value,
      },
      address: {
        city: city.value,
      },
      mobileNumber: mobileNumber.value,
    };
    return JSON.stringify(student);
  };
  return (
    <div className='add_student_form form_container'>
      <h1 className={"form_container_title"}>Create New Student</h1>
      <form id="addStudentForm" className={"form"} onSubmit={(event) => submit(event)}>

        <TextInput elementClass={"form__group"} name="firstName" label="First name" />
        <TextInput elementClass={"form__group"} name="secondName" label="Second name" />
        <TextInput elementClass={"form__group"} name="lastName" label="Last name" />
        <TextInput elementClass={"form__group"} name="city" label="City" />
        <NumberInput elementClass={"form__group"} name="mobileNumber" label="Mobile Number" />

        <input type="submit" value={"Enter"} />
      </form>
    </div>
  )
}
