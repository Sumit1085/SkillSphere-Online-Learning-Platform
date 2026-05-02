"use client";

import Image from "next/image";
import Link from "next/link";
import login from '../../../Assets/login.png'
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
export default function LoginPage() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data
        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: true,
            callbackURL: "/",
        });
        if (res) {
            alert('Welcome...!! You Are signed in')
        } if (error) {
            alert('Please Give Valid Credentials')
        }
    }
    const handleGoogleSignIn = async() => {


        const data = await authClient.signIn.social({
        provider: "google",

        
  });
  console.log(data)

    }
    return (

        < div className="min-h-screen bg-gray-100 flex items-center justify-center px-6" >
            <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div className="space-y-6">
                    <p className="text-green-500 font-semibold text-sm">
                        GUIDED MOMENTUM
                    </p>

                    <h1 className="text-4xl font-bold text-gray-800 leading-tight">
                        Master New Skills with Precision.
                    </h1>

                    <p className="text-gray-600 max-w-md">
                        Join over 100,000 learners on the journey to professional mastery.
                        SkillSphere provides the navigation; you provide the drive.
                    </p>

                    {/* IMAGE */}
                    <div className="bg-white p-3 rounded-xl shadow-md w-fit">
                        <Image
                            src={login}// put your image in public folder
                            alt="Learning"
                            width={250}
                            height={250}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* RIGHT SIDE (LOGIN CARD) */}
                <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Login to SkillSphere
                    </h2>

                    <p className="text-sm text-gray-500 mb-6">
                        Welcome back, Navigator. Please enter your details.
                    </p>

                    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                        {/* EMAIL */}
                        <div>
                            <label className="text-sm text-gray-600">Email</label>
                            <input
                                type="email" {...register("email", { required: 'Email is not valid' })}
                                placeholder="alex@skillsphere.edu"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            {errors.email && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <div className="flex justify-between text-sm">
                                <label className="text-gray-600">Password</label>
                                <Link href="#" className="text-indigo-600 hover:underline">
                                    Forgot password?
                                </Link>
                            </div>

                            <input
                                type="password" {...register("password", { required: 'Password is not valid' })}
                                placeholder="********"
                                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-700 text-white py-2 rounded-lg hover:bg-indigo-800 transition"
                        >
                            Login
                        </button>
                    </form>

                    {/* DIVIDER */}
                    <div className="flex items-center my-5">
                        <hr className="flex-1 border-gray-300" />
                        <span className="px-3 text-gray-400 text-sm">OR</span>
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    {/* GOOGLE BUTTON */}
                    <button onClick={handleGoogleSignIn} className="w-full border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100">
                        <Image
                            src={"https://www.svgrepo.com/show/475656/google-color.svg"} width={20} height={20}
                            alt="google"
                            className="w-5 h-5"
                        />
                        Continue with Google
                    </button>

                    {/* REGISTER */}
                    <p className="text-sm text-center mt-6 text-gray-500">
                        Don’t have an account?{" "}
                        <Link href={'/signup'} className="text-indigo-600 font-medium">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </ div>
    );
}