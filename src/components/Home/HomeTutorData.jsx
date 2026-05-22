import TutorCard from "../TutorCard";

const HomeTutorData = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL}/homePageTutorData`);
    const popularTutors = await res.json();
    return (
        <div className="max-w-7xl mx-auto mb-16">
            <div className="text-center">
                <p className="text-purple-700 text-xl mb-2"><strong>— Top Educators —</strong></p>
                <h2 className="font-bold text-4xl text-(--primary-text) mb-7">Meet Our Expert Tutors</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 mx-auto items-stretch">
                {
                    popularTutors.map(tutor => <TutorCard key={tutor._id} popularTutors={tutor}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default HomeTutorData;