import { Formik } from 'formik';
import { object, string, number } from 'yup';

import { Container, Input, InputMessage } from './UserForm.styled';
import Send from '../Button/Send/Send';

const validationFormikSchema = object({
  name: string().min(2).max(20).required(),
  email: string().email(),
  phone: number().required(),
  message: string(),
});

const UserForm = () => {
  return (
    <Container>
      <Formik
        initialValues={{ name: '', email: '', phone: '', message: '' }}
        validate={values => {
          const errors = {};
          // if (!values.email) {
          //   errors.email = 'Required';
          // } else if (
          //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          // ) {
          //   errors.email = 'Invalid email address';
          // }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          resetForm();
        }}
        validationSchema={validationFormikSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form id="formik" onSubmit={handleSubmit}>
            <p>*Full name:</p>
            <Input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}

            <p>*E-mail:</p>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}

            <p>*Phone:</p>
            <Input
              type="tel"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
              placeholder="+380"
            />
            {errors.phone && touched.phone && errors.phone}

            <p>Message:</p>
            <InputMessage
              type="text"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              placeholder="My message...."
            />
            {errors.message && touched.message && errors.message}

            <Send type="submit" disabled={isSubmitting} />
          </form>
        )}
      </Formik>
    </Container>
  );
};
export default UserForm;
