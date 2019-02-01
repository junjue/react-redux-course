import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { bindActionCreators, AnyAction } from 'redux';
import { State } from "../../store/state";
import { CourseActionCreatorFactory } from "../../actions/course.actions";
import { CourseForm } from "./courseForm";
import { Course } from './../../models/course';


export interface ManageCoursePageProps {
    course: Course

}

export interface ManageCoursePageStates {
    course: Course;
    errors?: Course;
    allAuthors: [];
    onSave: () => void;
    onChange: () => void;

}



export class ManageCoursePage extends React.Component<ManageCoursePageProps, ManageCoursePageStates> {
    constructor(props: ManageCoursePageProps, context: React.Context<any>) {
        super(props);
        this.state = {
            // course: this.props.course,
            course: {
                id: "",
                title: "",
                watchHref: "",
                authorId: "",
                length: "",
                category: ""
            },
            allAuthors: [],
            onSave: this.mock,
            onChange: this.mock
        }
    }

    mock = () => {
        console.log('123');
    }

    render() {
        return (
            <CourseForm
                course={this.state.course}
                allAuthors={[]}
                errors={this.state.errors}
                onChange={this.mock}
                onSave={this.mock} />
        );
    };
}


export interface ManageCoursePageProps {
}

function mapStateToProps(state: ManageCoursePageStates, ownProps: any): ManageCoursePageProps {
    return {
        course: state.course
    }
}

function mapDispatchToProps(dispatch: Dispatch<AnyAction>) {
    return {
        actions: bindActionCreators(CourseActionCreatorFactory(), dispatch as any)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);