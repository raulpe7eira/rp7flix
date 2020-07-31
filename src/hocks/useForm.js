import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const key = event.target.getAttribute('name');
    const { value } = event.target;

    setValues({
      ...values,
      [key]: value,
    });
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
