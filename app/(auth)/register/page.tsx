"use client";

import React, { useState } from "react";




import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
type ValueTypes = {
	email: string;
	password1: string;
	password2: string;
	first_name: string;
	last_name: string;
};

const initialValues: ValueTypes = {
	email: "",
	password1: "",
	password2: "",
	first_name: "",
	last_name: "",
};

const strongPasswordRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*]).{8,}$");

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password1: Yup.string()
		.min(8, "Password is too short, At lease 8 characters")
		.matches(strongPasswordRegex, "Password must contain at least one upper case English letter, one lower case English letter, one digit and one special character").required("Required"),
	password2: Yup.string()
		.oneOf([Yup.ref("password1")], "Passwords must match")
		.required("Required"),
	first_name: Yup.string().required("Required"),
	last_name: Yup.string().required("Required"),
});

export default function Register() {
	const [loading, setLoading] = useState(false);

	//  handle submit
	const handleSubmit = (values: ValueTypes) => {
		setLoading(true);
		fetch(`${process.env.NEXT_PUBLIC_DJANGO_API_URL}/api/user/register/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	};
	return (
		<main className="flex items-center justify-center min-h-screen bg-gray-100">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        handleSubmit(values);
      }}
    >
      <Form className="bg-white p-8 rounded-lg w-96">
        <h1 className="text-2xl font-bold mb-8 text-center">Register</h1>
        <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700" htmlFor="email">
        Email
      </label>
      <Field
        type="email"
        name="email"
        id="email"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <ErrorMessage
        name="email"
        component="section"
        className="text-red-500 text-sm mt-1"
      />
    </div>

    {/* Password 1 */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700" htmlFor="password1">
        Password
      </label>
      <Field
        type="password"
        name="password1"
        id="password1"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <ErrorMessage
        name="password1"
        component="section"
        className="text-red-500 text-sm mt-1"
      />
    </div>

    {/* Password 2 */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700" htmlFor="password2">
        Confirm Password
      </label>
      <Field
        type="password"
        name="password2"
        id="password2"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <ErrorMessage
        name="password2"
        component="section"
        className="text-red-500 text-sm mt-1"
      />
    </div>

    {/* First Name */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700" htmlFor="first_name">
        First Name
      </label>
      <Field
        type="text"
        name="first_name"
        id="first_name"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <ErrorMessage
        name="first_name"
        component="section"
        className="text-red-500 text-sm mt-1"
      />
    </div>

    {/* Last Name */}
    <div className="mb-5">
      <label className="block text-sm font-medium text-gray-700" htmlFor="last_name">
        Last Name
      </label>
      <Field
        type="text"
        name="last_name"
        id="last_name"
        className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      <ErrorMessage
        name="last_name"
        component="section"
        className="text-red-500 text-sm mt-1"
      />
    </div>

    {/* Submit Button */}
    <button type="submit" className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Submit
    </button>
      </Form>
    </Formik>
  </main>
	);
}
