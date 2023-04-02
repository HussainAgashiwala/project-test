import React, { useState } from "react";
import FormRow from "../components/FormRow";
import SelectInput from "../components/SelectInput";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const initialState = {
  text: "",
  image: "",
  format: "png",
  pformat:"",
};

const Form = () => {
  const [values, setValues] = useState(initialState);

  //Handling change of values.
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async ({ text }) => {
    try {
      //axios POST request on back-end.
      const response = await axios.post(
        `/api/v1/form/convert?text=${text}&format=${values.format}`
      );
      //Getting response data from back-end.
      const { imageName } = response.data;
      setValues({
        ...values,
        text: "",
        image: imageName,
        pformat:values.format,
        format:"png",
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  //Handling Submit.
  const handleSubmit = (e) => {
    e.preventDefault();
    const { text } = values;
    submitForm({ text });
  };
  return (
    <Wrapper className="full-form">
      <form onSubmit={handleSubmit} className="form">
        <FormRow
          type="text"
          name="text"
          labelText="Enter Text"
          value={values.text}
          handleChange={handleChange}
        />
        <SelectInput
          labelText="Select Format "
          type={values.format}
          handleChange={handleChange}
          name="format"
        />
        <button className="btn" type="submit">
          Convert To Image
        </button>
      </form>
      {values.image !== "" && (
        <div className="div-img">
          <img
            className="img"
            src={`http://localhost:5000/images/${values.image}.${values.pformat}`}
            alt=""
          />
          <Link to={`http://localhost:5000/images/${values.image}.${values.pformat}`}>
            Link to image
          </Link>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form {
    display: flex;
    flex-direction: column;
    padding: 15px;
    max-width: 280px;
    border: 5px solid black;
  }
  .form-row {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  .form-label {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 4px;
    word-spacing: 18px;
    margin-bottom: 15px;
  }
  .form-input {
    height: 30px;
    font-size: 20px;
  }
  .selectInput{
    display: flex;
    justify-content:space-evenly;
    padding-bottom: 20px;
  }
  .selectInput-label{
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 2px;
    word-spacing: 10px;
  }
  .selectInput-select{
    font-size: 15px;
  }
  .btn {
    margin: 15px;
    font-size: 20px;
    text-align: center;
    background-color: #e7e7e7;
    height: 30px;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px #999;
    cursor: pointer;
  }
  .img {
    border-radius: 10px;
  }
  .div-img {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }
  a {
    color: #2cb1bc;
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

export default Form;
