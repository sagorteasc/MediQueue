import TutorDetailsCard from "@/components/TutorDetailsCard";

export const generateMetadata = async ({ params }) => {
    const { id } = await params;

    return {
        title: `Mediqueue - ${id}`
    }
}

const TutorDetails = async ({ params }) => {

    const { id } = await params;
    console.log(id);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL}/allTutorData/${id}`)
    const tutorDetails = await res.json();

    return (
        <div className="max-w-6xl mx-auto mt-32 mb-16">
            <TutorDetailsCard tutorDetails={tutorDetails} />
        </div>
    );
};

export default TutorDetails;