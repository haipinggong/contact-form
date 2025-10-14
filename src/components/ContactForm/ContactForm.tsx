import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Grid,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { styles } from "./ContactForm.styles";
import { Formik, Form, Field, type FieldProps } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const contactFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
  termsAndConditions: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
  queryType: Yup.string().required("Please select a query type"),
});

export const ContactForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          queryType: "general-enquiry",
          message: "",
          termsAndConditions: false,
        }}
        validationSchema={contactFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
          setShowSuccessMessage(true);
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Field name="firstName">
                  {({ field, meta }: FieldProps) => (
                    <TextField
                      {...field}
                      sx={styles.textField}
                      id="first-name"
                      label="First Name"
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Field name="lastName">
                  {({ field, meta }: FieldProps) => (
                    <TextField
                      {...field}
                      id="last-name"
                      label="Last Name"
                      sx={styles.textField}
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>

              <Grid size={12}>
                <Field name="email">
                  {({ field, meta }: FieldProps) => (
                    <TextField
                      {...field}
                      id="email-address"
                      label="Email Address"
                      sx={styles.textField}
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>
              <Grid size={12}>
                <Field name="queryType">
                  {({ field, meta }: FieldProps) => (
                    <FormControl
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                    >
                      <FormLabel id="query-type-label">Query Type</FormLabel>
                      <RadioGroup
                        {...field}
                        aria-labelledby="query-type-label"
                        row
                      >
                        <FormControlLabel
                          control={<Radio />}
                          label="General Enquiry"
                          value="general-enquiry"
                        />
                        <FormControlLabel
                          control={<Radio />}
                          label="Support Request"
                          value="support-request"
                        />
                      </RadioGroup>
                      {meta.touched && meta.error && (
                        <FormHelperText>{meta.error}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                </Field>
              </Grid>
              <Grid size={12}>
                <Field name="message">
                  {({ field, meta }: FieldProps) => (
                    <TextField
                      {...field}
                      id="message"
                      label="Message"
                      sx={styles.textField}
                      multiline
                      rows={4}
                      error={meta.touched && Boolean(meta.error)}
                      helperText={meta.touched && meta.error}
                    />
                  )}
                </Field>
              </Grid>
              <Grid size={12}>
                <Field name="termsAndConditions">
                  {({ field, meta }: FieldProps) => (
                    <FormControl error={meta.touched && Boolean(meta.error)}>
                      <FormControlLabel
                        control={<Checkbox {...field} checked={field.value} />}
                        label="I consent to being contacted by the team"
                      />
                      {meta.touched && meta.error && (
                        <FormHelperText>{meta.error}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                </Field>
              </Grid>
              <Grid size={12}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={styles.submitButton}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      {showSuccessMessage && (
        <Snackbar
          open={showSuccessMessage}
          autoHideDuration={2000}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() => setShowSuccessMessage(false)}
        >
          <Alert severity="success">Message sent successfully</Alert>
        </Snackbar>
      )}
    </>
  );
};
