import React from 'react';
import { withTranslation } from 'react-i18next';
import { Formik } from 'formik';
import {
  Form, Input, Button,
  FormGroup,
} from 'semantic-ui-react';
// import PhoneInput from 'react-phone-input-2';
// import SemanticDatepicker from 'react-semantic-ui-datepickers';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
// import DatePicker from 'react-datepicker';
// import * as Yup from 'yup';
import styles from './Contact.module.less';

const EnquireNow = (props) => {
  const { t } = props;

  //   const schemaObj = {
  //     name: Yup.string()
  //       .required(`${modalContent.name} ${t('is_required')}`)
  //         const existingValues = existingNameList;
  //         return !existingValues.includes(value?.toLowerCase().trim());
  //       }),
  //   };

  //   const SignupSchema = Yup.object().shape(schemaObj);

  return (
    <div className={styles.enquire}>
      <h1>Enquire Now</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          mobile_number: '',
          event_type: '',
          date: '',
          location: '',
        }}
        // validationSchema={SignupSchema}
        // onSubmit={(values) => createNewHandler(values, modalName)}
        onSubmit={() => { }}
      >
        {({
          errors,
          touched,
          values,
          handleBlur,
          handleChange,
          // handleSubmit,
          setFieldValue,
          setFieldTouched,
        }) => (
          <Form
            // onSubmit={handleSubmit}
            action="https://formsubmit.co/arjunarun2542@gmail.com"
            method="POST"
          >
            <FormGroup widths="equal">
              <Form.Field
                value={values.name}
                control={Input}
                name="name"
                required
                placeholder={t('name')}
                label="Name"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.name && errors.name}
              />
              <Form.Field
                value={values.email}
                control={Input}
                name="email"
                required
                placeholder={t('email')}
                label="Email"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.email && errors.email}
              />
            </FormGroup>
            <FormGroup widths="equal">
              <Form.Field
                value={values.mobile_number}
                control={Input}
                name="mobile_number"
                required
                placeholder={t('mobile_number')}
                label="Phone Number"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.mobile_number && errors.mobile_number}
              />
              <Form.Field
                value={values.event_type}
                control={Input}
                name="event_type"
                required
                placeholder={t('event_type')}
                label="Event Type"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.event_type && errors.event_type}
              />
            </FormGroup>
            <FormGroup widths="equal">
              <Form.Field
                control={SemanticDatepicker}
                calendarIcon
                name="date"
                value={values.date}
                showMonthDropdown
                showYearDropdown
                onChange={(e, data) => setFieldValue('date', data.value)}
                onBlur={() => setFieldTouched('date', true)}
                // onChange={(date) => setFieldValue('date', date)}
                // onBlur={() => setFieldTouched('date', true)}
                // width={4}
                label={t('date')}
                // dateFormat="MMMM d, yyyy h:mm aa"
                dateFormat="dd/MM/yyyy"
              />
              <Form.Field
                value={values.location}
                control={Input}
                name="location"
                required
                placeholder={t('location')}
                label="Event Location"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                error={touched.location && errors.location}
              />
            </FormGroup>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
            <div>
              <Button type="submit">{t('submit')}</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default withTranslation('common')(EnquireNow);
