import { useState } from 'react';
import { useFetch } from './useFetch';

export const useForm = ( initialValues ) => {
  const [ formData, setFormData ] = useState( initialValues );
  const { data, isLoading, hasError, getUser } = useFetch(formData.username)

  const onChange = (event) => {
    event.preventDefault()

    setFormData( prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const onSubmit = (event) => {
    event.preventDefault()

    getUser( formData.username )
  }

  return {
    formData,
    userData: { data, isLoading, hasError },
    onChange,
    onSubmit
  }
}