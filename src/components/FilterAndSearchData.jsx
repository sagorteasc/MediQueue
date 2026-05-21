"use client";

import { useState } from "react";
import TutorCard from "./TutorCard";

const FilterAndSearchData = ({ allTutors }) => {

    const [tutors, setTutors] = useState(allTutors);
    const [searchTutor, setSearchTutor] = useState("");

    const handleSearch = async (e) => {
        const searchValue = e.target.value;
        setSearchTutor(searchValue);

        const res = await fetch(`${process.env.SERVER_SIDE_URL}/searchTutor?search=${searchValue}`);
        const data = await res.json()
        setTutors(data);
    }

    return (
        <div>
            <div className="w-3/4 mx-auto py-10 space-y-6 bg-[#f8f5ff] border border-purple-200 rounded-3xl p-6 shadow-sm">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-4">

                    <div className="space-y-1">
                        <label className="text-sm font-medium">
                            Search Tutor
                        </label>

                        <input
                            data-slot="input"
                            type="text"
                            placeholder="Search tutor by name..."
                            value={searchTutor}
                            onChange={handleSearch}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/4 mx-auto items-stretch">
                {
                    tutors.map(tutor => <TutorCard key={tutor._id} popularTutors={tutor}></TutorCard>)
                }
            </div>
        </div>
    );
};

export default FilterAndSearchData;