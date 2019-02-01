import { AnyAction } from 'redux';
import { CourseActionTypes, CourseActions } from '../actions/course.actions';
import { State } from '../store/state';

const courseReducer = (state: State, action: AnyAction) => {
    debugger;
    switch ((action as CourseActions).type) {
        case CourseActionTypes.LoadCoursesSuccess:
            return action.courses;
        default:
            return [state];
    }
};

export default courseReducer;