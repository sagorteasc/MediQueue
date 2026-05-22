"use client";
import { useSession } from '@/lib/auth-client';
import { Card, Separator } from '@heroui/react';
import Image from 'next/image';
import React, { useEffect } from 'react';

const MyProfile = () => {

    useEffect(() => {
        document.title = "Mediqueue - Profile"
    }, [])

    const { data } = useSession();
    const user = data?.user;

    return (
        <div className='max-w-200 w-4/5 md:w-2/5 lg:w-1/4 mx-auto mt-32 mb-16'>
            <Card className="w-full h-full rounded-xl p-0 drop-shadow-xl shadow-lg">
                <div className=' flex justify-center p-5'>
                    <div className="rounded-full">
                        {
                            user?.image &&
                            <Image
                                className="mx-auto rounded-full"
                                src={user?.image}
                                alt="User Image"
                                width={100}
                                height={100}
                            />
                        }
                    </div>
                </div>

                <div className='p-5'>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-500'>Name</p>
                        <strong className='text-(--primary-text)'>{user?.name}</strong>
                    </div>

                    <Separator className='my-4' />

                    <div className='flex justify-between items-center'>
                        <p className='text-gray-500'>Email</p>
                        <strong className='text-(--primary-text)'>{user?.email}</strong>
                    </div>

                    <Separator className='my-4' />

                    <div className='flex justify-between items-center'>
                        <p className='text-gray-500'>Member since</p>
                        <strong className='text-(--primary-text)'>{user?.createdAt ? new Date(user?.createdAt).toLocaleDateString() : "N/A"}</strong>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default MyProfile;