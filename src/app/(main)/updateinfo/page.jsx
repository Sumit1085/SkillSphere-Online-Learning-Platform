'use client'
import { authClient } from "@/lib/auth-client"
import { Button } from '@heroui/react';

import { Input, Label } from "@heroui/react";
import { useState } from "react";
const UpdateInfoPage = () => {
    const [Name, setName] = useState('')
    const [Image, setImage] = useState('')

    const updateInfobtn = async (e) => {
        e.preventDefault();
        await authClient.updateUser({
            image: Image,
            name: Name,
        })

        console.log("User Updated Information",Name, Image)
    }
    return (
        <div className='bg-[#EFF4FF] p-5 md:p-15'>
            <div className="container mx-auto">
                <div>
                    <h2 className='text-center font-7xl font-bold'>Update your Information</h2>
                </div>

                <div className="space-y-5">
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="input-type-email">Name</Label>
                        <Input id="input-type-email" placeholder="John Doe" type="text" onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Label htmlFor="input-type-number">Image URL</Label>
                        <Input id="input-type-number" min={0} placeholder="30" type="url" onChange={(e) => setImage(e.target.value)}/>
                    </div>

                    <div className="text-center">
                        <Button onClick={updateInfobtn}>Click me</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateInfoPage;    