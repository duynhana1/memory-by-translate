import React, { useState } from "react";
import app from "../firebaseApp";
import {
  Button,
  FormGroup,
  InputGroup,
  Intent,
  H2,
  Card,
  Elevation
} from "@blueprintjs/core";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

export default () => {
  let [unknownError, setUnknownError] = useState(null);
  return (
    <Card elevation={Elevation.TWO}>
      <H2>Sign in</H2>
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
            <FormGroup
              label="Email"
              helperText={touched.email && errors.email}
              labelFor="email"
              intent={
                errors.email && touched.email ? Intent.DANGER : Intent.NONE
              }
              inline={true}
            >
              <Field
                name="email"
                type="text"
                id="email"
                render={({ field, form, ...props }) => (
                  <InputGroup
                    {...field}
                    {...props}
                    intent={
                      errors.email && touched.email
                        ? Intent.DANGER
                        : Intent.NONE
                    }
                  />
                )}
              />
            </FormGroup>
            <FormGroup
              label="Password"
              helperText={touched.password && errors.password}
              labelFor="password"
              intent={
                errors.password && touched.password
                  ? Intent.DANGER
                  : Intent.NONE
              }
              inline={true}
            >
              <Field
                name="password"
                id="password"
                type="password"
                render={({ field, form, ...props }) => (
                  <InputGroup
                    {...field}
                    {...props}
                    intent={
                      errors.password && touched.password
                        ? Intent.DANGER
                        : Intent.NONE
                    }
                  />
                )}
                className={
                  errors.password && touched.password ? " is-invalid" : ""
                }
              />
            </FormGroup>
            {unknownError && <div>{unknownError}</div>}

            <div className="form-group">
              <Button
                type="submit"
                intent={Intent.PRIMARY}
                className="btn btn-primary mr-2"
              >
                Sign In
              </Button>
              {/* <button type="reset" className="btn btn-secondary">
              Reset
            </button> */}
            </div>
          </Form>
        )}
      />
    </Card>
  );
};
