"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function RegisterPage() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async(data) => {
        const { name, email, photo, password } = data;
        const { data:res, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password: password, // required
            image: photo,
            callbackURL: "/login"

           
        });
         console.log(res, error)
         if(error){
            alert(error.message)
         }if(res){
            alert('Sign Up Successful')
         }
    }

const handleGoogleSignUP = async() => {


        const data = await authClient.signIn.social({
        provider: "google",

        
  });
}
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="grid md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl w-full">
                {/* Left Section */}
                <div className="p-8 flex flex-col justify-center bg-gradient-to-br from-indigo-100 to-white">
                    <h1 className="text-3xl font-bold text-indigo-900 mb-4">
                        Elevate Your Career with SkillSphere
                    </h1>
                    <p className="text-gray-600 mb-6">
                        Join a community of over 50,000 learners mastering the most in-demand
                        technical and creative skills. Our guided momentum approach ensures
                        you never stop growing.
                    </p>

                    <div className="rounded-xl overflow-hidden shadow-md">
                        <Image
                            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                            alt="Team"
                            width={500}
                            height={300}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>

                {/* Right Section */}
                <div className="p-8 flex items-center justify-center">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full max-w-sm space-y-4"
                    >
                        <h2 className="text-xl font-semibold text-center text-gray-800">
                            Join SkillSphere Today
                        </h2>
                        <p className="text-sm text-center text-gray-500">
                            Start your learning journey in minutes
                        </p>

                        <input
                            type="text"
                            {...register("name", { required: 'Name is Required' })}
                            name="name"
                            placeholder="Full Name"
                            //   value={form.name}
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />

                        <input
                            type="email"
                            {...register("email", { required: 'Email is Required' })}
                            name="email"
                            placeholder="Email Address"
                            //   value={form.email}
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />

                        <input
                            type="text"
                            name="photo"
                            {...register("photo", { required: 'Photo URL is Required' })}
                            placeholder="Photo URL"
                            //   value={form.photo}
                            onSubmit={handleSubmit(onSubmit)} className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        />

                        <input
                            type="password"
                            name="password"
                            {...register("password", { required: 'Password URL is Required' })}
                            placeholder="Password"
                            //   value={form.password}
                            onSubmit={handleSubmit(onSubmit)}
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                        >
                            Register
                        </button>

                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            OR
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        <button
                        onClick={handleGoogleSignUP}
                            type="button"
                            className="w-full border py-2 rounded-lg hover:bg-gray-50 transition"
                        >
                            Continue with Google
                        </button>

                        <p className="text-sm text-center text-gray-500">

                            <span className="text-indigo-600 cursor-pointer"><Link href={'/login'}>Login</Link></span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}