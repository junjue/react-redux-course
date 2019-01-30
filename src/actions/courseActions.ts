import { ActionCreatorsMapObject, AnyAction } from "redux";
import { Course } from "../components/course/courses.container";


export enum CourseActionTypes {
    CreateCourse = "CREATE_COURSE",
}

export interface CreateCourseAction extends AnyAction {
    type: CourseActionTypes.CreateCourse,
    course: Course
}

export function createCourse(course: Course): CreateCourseAction {
    return {
        type: CourseActionTypes.CreateCourse,
        course
    };
}

export interface CourseActionCreator extends ActionCreatorsMapObject<CourseActions> {
    createCourse: (course: Course) => CreateCourseAction;
}

export const CourseActionCreatorFactory: () => CourseActionCreator = () => ({
    createCourse
});

export type CourseActions = CreateCourseAction;