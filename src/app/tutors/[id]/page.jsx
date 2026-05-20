import TutorDetailsCard from "@/components/TutorDetailsCard";

const TutorDetails = async ({ params }) => {

    const { id } = await params;
    const res = await fetch(`http://localhost:8000/allTutorData/${id}`)
    const tutorDetails = await res.json();

    return (
        <div className="max-w-6xl mx-auto mt-32 mb-16">
            <TutorDetailsCard tutorDetails={tutorDetails} />
        </div>
    );
};

export default TutorDetails;