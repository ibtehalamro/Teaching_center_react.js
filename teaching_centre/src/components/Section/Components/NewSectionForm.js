import React from "react";
 import DateInput from "../../Form/DateInput";
import TimeInput from "../../Form/TimeInput";

  const NewSectionForm = ({courseId,courseName} ) => {
   const submit = async (event, router) => {
    event.preventDefault();
    const { startDate,endDate,startTime,endTime,teacherId} = event.target;
    const section = {
    courseId:courseId,
     startDate:startDate.value,
     endDate:endDate.value,
     startTime:startTime.value,
     endTime:endTime.value,
     teacherId:teacherId.value
    };
  
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(section),
    };
    const response = await fetch("http://localhost:8081/section/", requestOptions);
    const data = await response.json();
    //  router.push(`/sections/`);
  };
  return (
    <div className={"form_container"}>
    <h1 className={"form_container_title"}>Create New Section for {courseName} Course</h1>
      <form className={"form"} onSubmit={(event) => "submit(event, router)"}>
      <DateInput elementClass={"form__group"} name="startDate" label="Start date" />
      <DateInput elementClass={"form__group"} name="endDate" label="End date" />
      <TimeInput elementClass={"form__group"} name="startTime" label="Start time" />
      <TimeInput elementClass={"form__group"} name="endTime" label="End time" />

<input
          className={"textInput"}
          type="number"
          name="teacherId"
          placeholder="teacher Id"
        />
        <input type="submit" value={"Enter"} />
      </form>
    </div>
  );
};
export default NewSectionForm;