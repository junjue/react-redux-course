import React, { Component, Dispatch } from "react";
import { connect } from "react-redux";
import { AnyAction, bindActionCreators } from "redux";

import { CourseActionCreator, CourseActionCreatorFactory } from "../../actions/course.actions";
import { State } from "../../store/state";
import { Course } from "../../models/course";
import CourseList from "./courseList";

export interface CourseState {
    course: Course;
}

export interface CourseDispatchProp {
    actions: CourseActionCreator;
}

export class CoursesContainer extends Component<State & CourseDispatchProp, CourseState> {
    constructor(props: any, context: React.Context<any>) {
        super(props, context);
    }

    courseRow(course: Course, index: number) {
        return <div key={index}>{course.title}</div>
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses} />
            </div>
        )
    }
}

function mapStateToProps(state: State, ownProps: any): State {
    return {
        courses: state.courses
    }
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>): CourseDispatchProp {
    return {
        // actions: bindActionCreators(courseActions, dispatch)
        actions: bindActionCreators(CourseActionCreatorFactory(), dispatch as any)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
