import React from 'react';
// import styled from 'styled-components';
import { Formik, Field, Form } from "formik";
import {
    // Input,
    // Form,
    // InputGroup,
    // Label,
    // TextArea,
    Button,
} from '../../components/TuxComponents/FormComponents';

const ConfirmationForm = ({ sections }) => {

    // initialize the section names for initalValues
    let data = []
    sections.forEach((ele, idx, arr) => {
        data.push({
            sectionName: ele.name,
            confidence: false
        })
    })
    return (
        <>
            <Formik
                initialValues={{ concepts: data, comment: '', }}
                onSubmit={(data, { setSubmitting }) => {
                    setSubmitting(true);
                    console.log("submit: ", data);
                    setSubmitting(false);
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit}>
                        {values.concepts.map((concept, idx) => (
                            <div>
                                <label key={idx}>
                                    {concept.sectionName}
                                    <Field name={`concepts[${idx}].confidence`} type="checkbox" checked={concept.confidence} onChange={handleChange}
                                    />
                                </label>
                            </div>
                        ))}
                        <Field name="comment" type="textarea" value={values.comment} onChange={handleChange}
                        />
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </Form>
                )}

            </Formik>
        </>
    );
}


export default ConfirmationForm;