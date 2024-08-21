import  'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';


export default function ContactForm() {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const id = nanoid();
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
         }) => (
          <form  className={css.form} onSubmit={handleSubmit}>
            <label>Name</label>
            <input className={css.email}
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <label>Number</label>
            <input className={css.password}
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button className={css.add} type="submit" disabled={isSubmitting}>
              Add Contact
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

