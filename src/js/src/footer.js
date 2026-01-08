import Container from './container';
import {Avatar, Button, Modal, Input, Select, Space} from 'antd';
import './footer.css';
import { useState } from 'react';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.gender) {
        errors.gender = 'Required';
    } else if (values.gender !== 'MALE' && values.gender !== 'FEMALE') {
        errors.gender = 'Invalid Gender';
    }

    return errors;
};

const Footer = (props) => {
    const [isModelOpen, setIsModelOpen] = useState(false);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            gender: '',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const showModal = () => {
        setIsModelOpen(true);
    };

    const handleOk = () => {
        setIsModelOpen(false);
    };

    const onCancel = () => {
        setIsModelOpen(false);
    };

    return (
        <div className="footer">
            <Container>
                {props.numberOfStudents ? (
                    <Avatar style={{ backgroundColor: '#f56a00', marginRight: '5px' }} size='large'>
                        {props.numberOfStudents}
                    </Avatar>
                ) : null}

                <Button type='primary' onClick={showModal}>Add a new student +</Button>
                <Modal
                    title="Add a new student"
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModelOpen}
                    onOk={handleOk}
                    onCancel={onCancel}>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            id='firstName'
                            name='firstName'
                            type='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div>{formik.errors.firstName}</div>
                        ) : null}

                        <label htmlFor="lastName">Last Name</label>
                        <input
                            id="lastName"
                            name="lastName"
                            type='text'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div>{formik.errors.lastName}</div>
                        ) : null}

                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div>{formik.errors.email}</div>
                        ) : null}

                        <label htmlFor="gender">Gender</label>
                        <select
                            id="gender"
                            name="gender"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.gender}
                        >
                            <option value="">Select a gender</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                        </select>
                        {formik.touched.gender && formik.errors.gender ? (
                            <div>{formik.errors.gender}</div>
                        ) : null}
                    </form>
                </Modal>
            </Container>
        </div>
    );
};

export default Footer;