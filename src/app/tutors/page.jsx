import FilterAndSearchData from "@/components/FilterAndSearchData";

const Tutors = async () => {

    const res = await fetch("http://localhost:8000/allTutorData");
    const allTutors = await res.json();

    return (
        <div className="max-w-7xl mx-auto mt-32 mb-16">
            <div className="w-3/4 mx-auto mb-6">
                <h2 className="font-bold text-gray-800 text-4xl mb-2">Find Your Tutor</h2>
                <p className="text-black/70">Discover 6 expert tutors ready to help you succeed</p>


            </div>

            <FilterAndSearchData allTutors={allTutors} />

        </div>
    );
};

export default Tutors;