"use client";
import Form from "next/form";
import React from "react";

const StartupForm = () => {
  return (
    <Form action={() => {}} className="startup-form">
      <div>
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <input
          id="title"
          name="title"
          className="startup-form_input"
          required
          placeholder="Startup Title"
        ></input>
        {1 && <p className="startup-form">{"errors.title"} </p>}
      </div>
    </Form>
  );
};

export default StartupForm;
