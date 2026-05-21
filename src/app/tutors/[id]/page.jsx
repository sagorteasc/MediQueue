import TutorDetailsCard from "@/components/TutorDetailsCard";

const TutorDetails = async ({ params }) => {

    const { id } = await params;
    const res = await fetch(`${process.env.SERVER_SIDE_URL}/allTutorData/${id}`)
    const tutorDetails = await res.json();

    return (
        <div className="max-w-6xl mx-auto mt-32 mb-16">
            <TutorDetailsCard tutorDetails={tutorDetails} />
        </div>
    );
};

export default TutorDetails;