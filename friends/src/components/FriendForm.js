import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

const FriendForm = ({ errors, touched, isSubmitting }) => {
  return (
    <>
      <Form>
        <div className='inputs'>
          <label>
            Name*&nbsp;
            <Field type='text' name='name' placeholder='Name' />
            <br />
          </label>
          {touched.name && errors.name && (
            <p className='error'>{errors.name}</p>
          )}
          <label>
            Age*&nbsp;
            <Field type='text' name='age' placeholder='Age' />
          </label>
          {touched.name && errors.name && (
            <p className='error'>{errors.name}</p>
          )}
          <label>
            Email*&nbsp;
            <Field type='email' name='email' placeholder='Email' />
          </label>
          {touched.email && errors.email && (
            <p className='error'>{errors.email}</p>
          )}
        </div>
        <button disabled={isSubmitting}>SUBMIT</button>
      </Form>
    </>
  )
}

// pass in 2 funcs on an obj to withFormik
const FormikUserForm = withFormik({
  // mapPropsToValues function initializes state and handlechange for form
  mapPropsToValues({ name, age, email }) {
    return {
      name: name || '',
      age: age || '',
      email: email || ''
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup
      .string()
      .required(),
    age: Yup
      .number()
      .positive()
      .integer()
      .required(),
    email: Yup
      .string()
      .email('email is not valid')
      .required()
  }),
  handleSubmit(values, { setStatus, resetForm, setSubmitting }) {
    axios
      .post('http://localhost:5000/api/data', values)
      .then((res) => {
        setStatus(res.data)
        resetForm()
        setSubmitting(false)
      })
      .catch((err) => {
        console.log(err.response)
        setSubmitting(false)
      })
  }
})(FriendForm)

export default FormikUserForm
