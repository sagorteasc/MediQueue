import TutorCard from "@/components/TutorCard";

const Tutors = async () => {

    const res = await fetch("http://localhost:8000/allTutorData");
    const allTutors = await res.json();

    return (
        <div className="max-w-7xl mx-auto mt-32 mb-16">
            <div className="w-3/4 mx-auto mb-6">
                <h2 className="font-bold text-gray-800 text-4xl mb-2">Find Your Tutor</h2>
                <p className="text-black/70">Discover 6 expert tutors ready to help you succeed</p>

                <div className="py-10 space-y-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

                        <div className="space-y-1">
                            <label className="text-sm font-medium">
                                Search Tutor
                            </label>

                            <input
                                data-slot="input"
                                type="text"
                                placeholder="Search tutor by name..."
                                // value=""
                                className="h-8 w-full rounded-lg border px-2.5 py-1 text-sm"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium">
                                Start Date
                            </label>

                            <input
                                data-slot="input"
                                type="date"
                                // value=""
                                className="h-8 w-full rounded-lg border px-2.5 py-1 text-sm"
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium">
                                End Date
                            </label>

                            <input
                                data-slot="input"
                                type="date"
                                // value=""
                                className="h-8 w-full rounded-lg border px-2.5 py-1 text-sm"
                            />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="invisible text-sm font-medium">
                                End Date
                            </label>

                            <button
                                data-slot="button"
                                data-variant="outline"
                                data-size="default"
                                className="inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border bg-background px-2.5 text-sm font-medium transition-all hover:bg-muted hover:text-foreground"
                            >
                                Reset Filters
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 mx-auto items-stretch">
                {
                    allTutors.map(tutor => <TutorCard key={tutor._id} popularTutors={tutor}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default Tutors;