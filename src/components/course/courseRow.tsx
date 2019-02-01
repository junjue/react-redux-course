import { Course } from "../../models/course";
import { Link } from "react-router-dom";
import React from "react";


export interface CourseListRowProps {
    course: Course;
}
const CourseListRow = (props: CourseListRowProps) => {
    return (
        <tr>
            <td><a href={props.course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'course/' + props.course.id}>{props.course.title}</Link></td>
            <td>{props.course.authorId}</td>
            <td>{props.course.category}</td>
            <td>{props.course.length}</td>
        </tr>
    );
}

export default CourseListRow;