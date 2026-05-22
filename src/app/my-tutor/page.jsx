import DeleteTutor from "@/components/DeleteTutor";
import EditTutor from "@/components/EditTutor";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";

export const metadata = {
    title: "MediQueue - My Tutors",
};

const MyTutors = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL}/myTutor/${user.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const myTutor = await res.json();

    return (
        <div className="max-w-7xl w-5/6 md:w-3/4 mx-auto mt-32 mb-16">
            <div className="mb-6">
                <h2 className="font-bold text-(--primary-text) text-4xl mb-2">My Tutors</h2>
                <p className="text-gray-500">Manage your listed tutors</p>
            </div>

            {
                myTutor.length === 0 ?
                    <div className="flex flex-col items-center justify-center py-24 text-center">

                        <h2 className="text-3xl font-bold text-(--primary-text)">
                            No Tutors Added Yet
                        </h2>

                        <p className="text-gray-500 mt-3 max-w-md">You haven’t added any tutors yet. Create your first tutor profile and start connecting with students.</p>
                    </div>
                    :
                    <Table>
                        <Table.ScrollContainer>
                            <Table.Content aria-label="Team members">
                                <Table.Header>
                                    <Table.Column isRowHeader>Tutor Name</Table.Column>
                                    <Table.Column>Subject</Table.Column>
                                    <Table.Column>Available</Table.Column>
                                    <Table.Column>Hourly Fee</Table.Column>
                                    <Table.Column>Total Slot</Table.Column>
                                    <Table.Column>Starting Date</Table.Column>
                                    <Table.Column>Action</Table.Column>
                                </Table.Header>
                                <Table.Body>
                                    {myTutor.map(tutor => (
                                        <Table.Row key={tutor._id}>
                                            <Table.Cell>{tutor.name}</Table.Cell>
                                            <Table.Cell>{tutor.subject}</Table.Cell>
                                            <Table.Cell>{tutor.availability}</Table.Cell>
                                            <Table.Cell>{tutor.hourlyFee}</Table.Cell>
                                            <Table.Cell>{tutor.totalSlot}</Table.Cell>
                                            <Table.Cell>{tutor.sessionStartDate}</Table.Cell>
                                            <Table.Cell className={"flex items-center gap-2"}>
                                                <EditTutor tutor={tutor} />
                                                <DeleteTutor tutorId={tutor._id} />
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table.Content>
                        </Table.ScrollContainer>
                    </Table>
            }
        </div>
    );
};

export default MyTutors;