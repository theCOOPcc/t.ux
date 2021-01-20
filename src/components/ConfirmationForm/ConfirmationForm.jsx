import React from 'react';
import { Formik, Field, Form } from "formik";
import * as U from '../../components/TuxComponents/UniversalComponents';
import * as F from '../../components/TuxComponents/FormComponents';

const ConfirmationForm = ({ sections, currentModule }) => {

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
            <h1>Congratulations!</h1>
            <h3>You've successfully completed your</h3>
            sections.
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