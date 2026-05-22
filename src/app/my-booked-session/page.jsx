import CancelBooking from "@/components/CancelBooking";
import ConfirmBooking from "@/components/ConfirmBooking";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";

export const metadata = {
    title: "MediQueue - My Booking Sessions",
};

const MyBookedSession = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL}/booking/${user.id}`);
    const bookedSession = await res.json();

    return (
        <div className="max-w-7xl w-5/6 md:w-3/4 mx-auto mt-32 mb-16">
            <div className="mb-6">
                <h2 className="font-bold text-(--primary-text) text-4xl mb-2">My Booked Sessions</h2>
                <p className="text-gray-500">{bookedSession.length} sessions in total</p>
            </div>

            {
                bookedSession.length === 0 ?
                    <div className="flex flex-col items-center justify-center py-24 text-center">

                        <h2 className="text-3xl font-bold text-(--primary-text)">
                            No Booking Sessions Found
                        </h2>

                        <p className="text-gray-500 mt-3 max-w-md">
                            You haven’t booked any tutoring sessions yet.
                            Explore tutors and start learning today.
                        </p>

                    </div>
                    :
                    <Table>
                        <Table.ScrollContainer>
                            <Table.Content aria-label="Team members">
                                <Table.Header>
                                    <Table.Column isRowHeader>Name</Table.Column>
                                    <Table.Column>Tutor Name</Table.Column>
                                    <Table.Column>Email</Table.Column>
                                    <Table.Column>Status</Table.Column>
                                    <Table.Column>Action</Table.Column>
                                </Table.Header>
                                <Table.Body>
                                    {bookedSession.map(session => (
                                        <Table.Row key={session._id}>
                                            <Table.Cell>{session.userName}</Table.Cell>
                                            <Table.Cell>{session.tutorName}</Table.Cell>
                                            <Table.Cell>{session.userEmail}</Table.Cell>
                                            <Table.Cell
                                                className={`
                                            ${session.status === "Pending" ?
                                                        "text-yellow-700 text-xs"
                                                        :
                                                        session.status === "Confirmed" ?
                                                            "text-green-700 text-xs"
                                                            :
                                                            session.status === "Rejected" ?
                                                                "text-red-700 text-xs"
                                                                : ""
                                                    }`
                                                }>
                                                {session.status}
                                            </Table.Cell>
                                            <Table.Cell className={"flex items-center gap-2"}>
                                                <ConfirmBooking bookingId={session._id} />
                                                <CancelBooking bookingId={session._id} />
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

export default MyBookedSession;