import { CourseActionTypes, CourseActions } from '../actions/courseActions';
import { Course } from '../components/course/courses.container';

export default function courseReducer(state: Course[] = [], action: CourseActions) {
    switch (action.type) {
        case CourseActionTypes.CreateCourse:
            return [...state, { ...action.course }];
            break;
        default:
            return state;
    }
}
