import * as Yup from 'yup';

export const login_schema = Yup.object().shape({
    userEmail: Yup
        .string()
        .required('email is required')
        .email('email is invalid'),
    userPassword: Yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('password is required')
})