import React from 'react';
import { useFormikContext } from 'formik';

import TextInput from '../TextInput';
import ErrorMessage from './ErrorMessage';

const FormField = ({ name, ...restProps }) => {
  const { values, errors, touched, setFieldTouched, handleChange } = useFormikContext();

  return (
    <>
      <TextInput
        value={values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...restProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;