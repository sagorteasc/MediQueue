import FilterAndSearchData from "@/components/FilterAndSearchData";

export const metadata = {
    title: "MediQueue - All Tutors",
};

const Tutors = async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_SIDE_URL}/allTutorData`);
    const allTutors = await res.json();

    return (
        <div className="max-w-7xl mx-auto mt-32 mb-16">
            <div className="w-3/4 mx-auto mb-6">
                <h2 className="font-bold text-(--primary-text) text-4xl mb-2">Find Your Tutor</h2>
                <p className="text-gray-500">Discover 6 expert tutors ready to help you succeed</p>


            </div>

            <FilterAndSearchData allTutors={allTutors} />

        </div>
    );
};

export default Tutors;