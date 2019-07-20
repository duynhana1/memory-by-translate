import React, { useState } from "react";
import * as firebase from "firebase";
// import { Button } from "@blueprintjs/core";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default () => {
  let [unknownError, setUnknownError] = useState(null);
  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required")
      })}
      onSubmit={({ email, password }, actions) => {
        // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
        console.log("submitting");
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch(function(error) {
            console.log(error.message);
            switch (error.code) {
              case "auth/user-not-found":
                actions.setFieldError("email", error.message);
                break;
              case "auth/wrong-password":
                actions.setFieldError("password", error.message);
                break;
              default:
                setUnknownError(unknownError);
            }
          });
      }}
      render={({ errors, status, touched }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="text"
              className={
                "form-control" +
                (errors.email && touched.email ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              className={
                "form-control" +
                (errors.password && touched.password ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="password"
              component="div"
              className="invalid-feedback"
            />
          </div>
          {unknownError && <div>{unknownError}</div>}

          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2">
              Sign In
            </button>
            {/* <button type="reset" className="btn btn-secondary">
              Reset
            </button> */}
          </div>
        </Form>
      )}
    />
  );
};
