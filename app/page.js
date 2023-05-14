"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TField from "@/components/TField";
export default function Home() {
  const [Phone, setPhone] = useState("");
  const [Result, setResult] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("name is required"),
    email: Yup.string().required("email is required"),
    address: Yup.string().required("address is required"),
    city: Yup.string().required("city is required"),
    state: Yup.string().required("state is required"),
    education: Yup.string().required("education is required"),
    gender: Yup.string().required("gender is required"),
    age: Yup.string().required("age is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    Phone: "",
    address: "",
    city: "",
    state: "",
    gender: "",
    education: "",
    age: "",
  };

  function SaveToDB(kQuery) {
    var data = new FormData();
    data.append("q", kQuery);
    let xmlhttp;

    try {
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }
      xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          alert(this.response);
          setResult(true);
        }
      };

      xmlhttp.open("POST", "openmicreg.php", true);
      xmlhttp.send(data);
    } catch (err) {
      console.log(err.message);
    }
  }

  const onSubmit = (values) => {
    if (Phone === "") {
      alert("please add your whatsapp number");
    } else {
      const kQuery =
        "('" +
        values.name +
        "','" +
        values.email +
        "','" +
        Phone +
        "','" +
        values.address +
        "','" +
        values.city +
        "','" +
        values.state +
        "','" +
        values.gender +
        "','" +
        values.education +
        "','" +
        values.age +
        "')";

      SaveToDB(kQuery);
    }
  };

  return (
    <>
      <h1 className="text-4xl text-center">Society</h1>
      <h2 className="text-2xl text-center">Openmic Registration Form</h2>
      {!Result && (
        <div className="w-full flex flex-wrap-reverse">
          <div className="w-full sm:w-10/12 md:w-9/12 mx-auto">
            <h2>Openmic Registration</h2>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({ errors, touched }) => (
                <Form>
                  <div className="flex flex-wrap">
                    <TField
                      name="name"
                      inputlabel="Full Name"
                      placeholder="Please Enter your Name"
                      CName="w-full md:w-1/3 my-2 px-5"
                      type="text"
                      required
                    />
                    <TField
                      name="email"
                      inputlabel="Email Address"
                      placeholder="Please Enter your Email ID"
                      CName="w-full md:w-1/3 my-2 px-5"
                      type="email"
                      required
                    />
                    <div className="w-full md:w-1/3 my-2 px-5">
                      <label
                        className="flex h-10 w-full items-end"
                        htmlFor="Phone"
                      >
                        Whatsapp Number *
                      </label>
                      <PhoneInput
                        id="Phone"
                        name="Phone"
                        className="flex w-full md:w-1/3  rounded-md  bg-transparent px-3  text-xs ring-offset-background  file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={Phone}
                        onChange={(phone) => setPhone(phone)}
                        required
                      />
                    </div>

                    <div className="w-1/2 md:w-1/4 my-2 px-5">
                      <label
                        htmlFor="gender"
                        className="flex h-10 w-full items-end"
                      >
                        {" "}
                        Select your gender
                      </label>
                      <Field
                        as="select"
                        name="gender"
                        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        required
                      >
                        <option value="" disabled defaultValue>
                          Gender
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Field>
                      <ErrorMessage name="gender" component="div" />
                    </div>
                    <TField
                      name="age"
                      inputlabel="Age"
                      placeholder="Age"
                      CName="w-1/2 md:w-1/4 my-2 px-5"
                      type="text"
                      required
                    />
                    <TField
                      name="education"
                      inputlabel="Education"
                      placeholder="Education"
                      CName="w-full md:w-1/2 my-2 px-5"
                      type="text"
                      required
                    />

                    <TField
                      name="address"
                      inputlabel="Address"
                      placeholder="Please Enter Address"
                      CName="w-full md:w-1/2 my-2 px-5"
                      type="text"
                      required
                    />
                    <TField
                      name="city"
                      inputlabel="City"
                      placeholder="City"
                      CName="w-1/2 md:w-1/4 my-2 px-5"
                      type="text"
                      required
                    />
                    <TField
                      name="state"
                      inputlabel="State / Province / Region"
                      placeholder="State / Province / Region"
                      CName="w-1/2 md:w-1/4 my-2 px-5"
                      type="text"
                      required
                    />

                    <div className="w-full text-center">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full mt-5"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
      {Result && <h1>Thank you for Registration</h1>}
    </>
  );
}
