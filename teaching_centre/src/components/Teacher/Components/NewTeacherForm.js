import React from 'react';
import TextInput from '../../Form/TextInput';

const NewTeacherForm = () => {
 
  return (
    <div className={"form_Container"}>
      <h1 className={"form_container_title"}>Create New Teacher</h1>
      <form className={"form"} onSubmit={(event) =>" submit(event, router)"}>
        <TextInput elementClass={"form__group"} name="firstName" label="First name" />
        <TextInput elementClass={"form__group"} name="secondName" label="Second name" />
        <TextInput elementClass={"form__group"} name="lastName" label="Last name" />
        <TextInput elementClass={"form__group"} name="city" label="City" />
        <TextInput elementClass={"form__group"} name="mobileNumber" label="Mobile Number" />


        <input type="submit" value={"Enter"} />
      </form>
    </div>
  )
}

export default NewTeacherForm;