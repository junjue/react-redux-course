import { Course } from "../components/course/courses.container";
import { AnyAction } from "redux";


export enum CourseActionTypes {
    CreateCourse = "CREATE_COURSE",
}

export interface CreateCourseAction extends AnyAction {
    type: CourseActionTypes.CreateCourse,
    course: Course
};

export function createCourse(course: Course): CreateCourseAction {
    return {
        type: CourseActionTypes.CreateCourse,
        course
    }
}

export type CourseActions = CreateCourseAction;
