import React from 'react';

export interface SelectInputProps {
    name: string;
    label: string;
    onChange: () => void;
    defaultOption?: string;
    value?: string;
    error?: string;
    options?: Option[];
}

export interface Option {
    value: string;
    text: string;
}

const SelectInput = (props: SelectInputProps) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{props.label}</label>
            <div className="field">
                <select
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    className="form-control">
                    <option value="">{props.defaultOption}</option>
                    {props.options && props.options.map(option => (
                        <option key={option.value} value={option.value}>{option.text}</option>
                    ))}
                </select>
                {props.error && <div className="alert alert-danger">{props.error}</div>}
            </div>
        </div>
    );
};

export default SelectInput;