import React from 'react';
import { Course } from '../../models/course';
import CourseListRow from './courseRow';

export interface CourseListProps {
    courses: Course[];
}

const CourseList = (props: CourseListProps) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {props.courses.map(course =>
                    <CourseListRow key={course.id} course={course} />)}
            </tbody>
        </table>
    );
}

export default CourseList;