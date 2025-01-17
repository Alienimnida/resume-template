import { Course } from "@/types/resume2";
export const Courses = ({ courses }: { courses: Course[] }) => {
    return (
        <section className="mb-6">
            <h2 className="text-xl font-bold text-[#0C2340] border-b-2 border-[#0C2340] mb-4">COURSES</h2>
            <div className="space-y-4">
                {courses.map((course, index) => (
                    <div key={index}>
                        <h3 className="font-bold text-[#0C2340]">{course.title}</h3>
                        <p className="text-gray-700">{course.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};