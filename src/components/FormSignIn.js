import React, { useState } from "react";
import app from "../firebase";
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
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
        app
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
      render={({ errors, touched }) => (
        <Form>
          <FormGroup label="Email" labelFor="email" inline={true}>
            <Field
              name="email"
              type="text"
              id="email"
              render={({ field }) => <InputGroup {...field} />}
              intent={errors.email && touched.email ? "danger" : "none"}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
          </FormGroup>
          <FormGroup label="Password" labelFor="email" inline={true}>
            <Field
              name="password"
              id="password"
              type="password"
              render={({ field }) => <InputGroup {...field} />}
              className={
                errors.password && touched.password ? " is-invalid" : ""
              }
            />
            <ErrorMessage
              name="password"
              component="div"
              className="invalid-feedback"
            />
          </FormGroup>
          {unknownError && <div>{unknownError}</div>}

          <div className="form-group">
            <Button type="submit" className="btn btn-primary mr-2">
              Sign In
            </Button>
            {/* <button type="reset" className="btn btn-secondary">
              Reset
            </button> */}
          </div>
        </Form>
      )}
    />
  );
};
