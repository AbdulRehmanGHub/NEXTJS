import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="px-4 py-4">
        <h1 className="text-4xl font-semibold">Courses Page</h1>
        <div>
          <ul>
            <li>
              <Link href={`/courses/course-details/course-1`}>
                Course 1
              </Link>
            </li>
            <li>
              <Link href={`/courses/course-details/course-2`}>
                Course 2
              </Link>
            </li>
            <li>
              <Link href={`/courses/course-details/course-3`}>
                Course 3
              </Link>
            </li>
            <li>
              <Link href={`/courses/course-details/course-4`}>
                Course 4
              </Link>
            </li>
            <li>
              <Link href={`/courses/course-details/course-5`}>
                Course 5
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
