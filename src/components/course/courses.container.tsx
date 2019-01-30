import React, { Component } from 'react';

export interface ICoursesProps {
}

export interface ICoursesState {
    course: Course,
}

export interface Course {
    title: string,
}

export default class CoursesContainer extends Component<ICoursesProps, ICoursesState> {
    constructor(props: ICoursesProps, context: any) {
        super(props, context);
        this.state = {
            course: { title: "" }
        }

        // can add binding in render, but performance is worse
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({ course: course });
    }

    onClickSave() {
        alert(`Saving ${this.state.course.title}`);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} />
                <input
                    type="submit"
                    onClick={this.onClickSave}
                    value="Save" />
            </div>
        )
    }
}
