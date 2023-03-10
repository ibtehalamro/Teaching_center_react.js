import React from "react";
 
 const NewPaymentForm = () => {
 
  const submit = async (event) => {
    event.preventDefault();
    // const { student_section_id } = router.query;
    const { amount, currency, discount } = event.target;
    const payment = {
      amount: amount.value,
      discount: discount.value,
      student_section_id: "student_section_id" || 0,
      currency: currency.value,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payment),
    };
    const response = await fetch(
      "http://localhost:8081/payment/",
      requestOptions
    );
    const data = await response.json();
  };
  return (
    <div className={"form_Container"}>
      <h1 className={"form_container_title"}>Create New Payment</h1>
      <form className={"form"} onSubmit={(event) => submit(event)}>
        <input
          className={"textInput"}
          type="number"
          name="amount"
          placeholder="Amount"
        />

        <select name="currency">
          <option value="ILS">ILS</option>
          {/* <option value="JOD">JOD</option>
          <option value="USD">USD</option> */}
        </select>

        <input
          className={"textInput"}
          type="number"
          name="discount"
          placeholder="Discount"
        />
        <input type="submit" value={"enter"} />
      </form>
    </div>
  );
};
export default NewPaymentForm;