"use client";
import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/components/icon/forAuth/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/icon/forAuth/EyeSlashFilledIcon";
import { useAppDispatch } from "@/redux/hooks";
import { setAssessToken } from "@/redux/feature/auth/authSlice";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type ValueTypes = {
  email: string;
  password: string;
};

const initialValues: ValueTypes = {
  email: "",
  password: "",
};

// Validation schema with Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
});

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const { data: session } = useSession();
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  // Handle form submission
  const handleSubmit = (values: ValueTypes) => {
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
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
        dispatch(setAssessToken(data.accessToken));

        console.log(data.accessToken);
        router.push("/");
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  return (
    <div className="flex  lg:items-center justify-center min-h-screen">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full border-1 p-5  rounded-lg shadow-sm  max-w-md mx-auto space-y-8">
          <div className="mb-5">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
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
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="password1"
            >
              Password
            </label>
            <Field
              type="password"
              name="password"
              id="password"
              className="mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage
              name="password1"
              component="section"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              className="w-full sm:w-auto flex items-center justify-center px-4 py-2 text-white bg-blue-600 rounded-md"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <FaGoogle className="mr-2" /> Sign in with Google
            </button>
            <button
              className="w-full sm:w-auto flex items-center justify-center px-4 py-2 text-gray-700 border border-gray-300 rounded-md"
              onClick={() => signIn("github", { callbackUrl: "/" })}
            >
              <FaGithub className="mr-2" /> Sign in with GitHub
            </button>
          </div>
          <div className="mt-4 text-center">
            <p>
              Dont have an account? <Link href="/register">Create one</Link>
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
