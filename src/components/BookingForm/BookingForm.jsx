import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../BookingForm/BookingForm.module.css";

const UserBookingSchema = Yup.object().shape({
  name: Yup.string()
    .required("User name is required!")
    .min(2, "User name must be at least 2 characters!")
    .max(50, "User name must be less than 50 characters!"),
  email: Yup.string().required("Email is required!").email("Must be a valid email!"),
  bookingDate: Yup.string()
    .required("Bookihg date is required!")
    .min(8, "Bookihg date must be at least 8 characters!"),
});

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  bookingDate: "",
  comment: "",
};

export default function BookingForm({ onRegister }) {
  const handleSubmit = (data, formActions) => {
    onRegister(data);
    formActions.resetForm();
  };

  return (
    <Formik
      validationSchema={UserBookingSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.text}>Stay connected! We are always ready to help you.</p>
        <Field className={css.input} placeholder="Name*" type="text" name="name" />
        <ErrorMessage className={css.error} name="name" component="span" />

        <Field className={css.input} placeholder="Email*" type="email" name="email" />
        <ErrorMessage className={css.error} name="email" component="span" />

        <Field className={css.input} placeholder="Booking date*" type="text" name="bookingDate" />
        <ErrorMessage className={css.error} name="bookihgDate" component="span" />

        <Field
          as="textarea"
          className={css.textarea}
          placeholder="Comment"
          name="comments"
          rows="4"
        />
        <ErrorMessage className={css.error} name="comments" component="span" />

        <button className={css.btn} type="submit" title="Click to booking date">
          Send
        </button>
      </Form>
    </Formik>
  );
}
