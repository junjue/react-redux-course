import React from 'react';
import { Course } from '../../models/course';
import SelectInput from '../common/SelectInput';
import TextInput from '../common/TextInput';

export interface CourseFormProps {
    course: Course;
    allAuthors: [];
    onSave: () => void;
    onChange: () => void;
    loading?: boolean;
    errors?: Course;
}

export const CourseForm = (props: CourseFormProps) => {
    return (
        <form>
            <h1>Manage Course</h1>
            <TextInput
                name="title"
                label="Title"
                value={props.course.title}
                onChange={props.onChange}
                error={props.errors && props.errors.title} />

            <SelectInput
                name="authorId"
                label="Author"
                value={props.course.authorId}
                defaultOption="Select Author"
                options={props.allAuthors}
                onChange={props.onChange}
                error={props.errors && props.errors.authorId} />

            <TextInput
                name="category"
                label="Category"
                value={props.course.category}
                onChange={props.onChange}
                error={props.errors && props.errors.title} />

            <TextInput
                name="length"
                label="Length"
                value={props.course.length}
                onChange={props.onChange}
                error={props.errors && props.errors.length} />

            <input
                type="submit"
                disabled={props.loading}
                value={props.loading ? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={props.onSave} />
        </form>
    )
}