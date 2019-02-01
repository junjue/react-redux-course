import { ActionCreatorsMapObject, AnyAction } from "redux";
import CourseApi from "../api/mockCourseApi";
import { Dispatch } from "react";
import { Course } from '../models/course';

export enum CourseActionTypes {
    LoadCoursesSuccess = "LOAD_COURSES_SUCCESS",
}

export interface LoadCoursesSuccessAction extends AnyAction {
    type: CourseActionTypes.LoadCoursesSuccess,
    courses: Course[]
}

export function loadCoursesSuccess(courses: Course[]): LoadCoursesSuccessAction {
    return {
        type: CourseActionTypes.LoadCoursesSuccess,
        courses
    };
}

// thunk
export function loadCourses() {
    return function (dispatch: Dispatch<AnyAction>) {
        return CourseApi.getAllCourses()
            .then(courses => {
                dispatch(loadCoursesSuccess(courses as Course[]));
            })
            .catch(error => {
                throw (error);
            });
    }
}

export interface CourseActionCreator extends ActionCreatorsMapObject<CourseActions> {
    loadCoursesSuccess: (courses: Course[]) => LoadCoursesSuccessAction;
}

export const CourseActionCreatorFactory: () => CourseActionCreator = () => ({
    loadCoursesSuccess
});

export type CourseActions = | LoadCoursesSuccessAction;