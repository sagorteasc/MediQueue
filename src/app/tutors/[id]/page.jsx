import TutorDetailsCard from "@/components/TutorDetailsCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


export const generateMetadata = async ({ params }) => {
    const { id } = await params;
    return {
        title: `Mediqueue - User Id:${id}`
    }
}

const TutorDetails = async ({ params }) => {

    const { id } = await params;
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL}/allTutorData/${id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const tutorDetails = await res.json();

    return (
        <div className="max-w-6xl mx-auto mt-32 mb-16">
            <TutorDetailsCard tutorDetails={tutorDetails} />
        </div>
    );
};

export default TutorDetails;