
import { Formik, Form, ErrorMessage, Field } from "formik"
import * as Yup from "yup"

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Debe tener min 2 letras")
        .max(20, "el maximo es 20")
        .required("Es obligatorio"),
    email: Yup.string()
        .email("email invalido")
        .required("Es obligatorio"),
    password: Yup.string()
        .min(8, " minimo 8 caracteres")
        .required("Es obligatorio"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], " no coinciden las contraseñas")
        .required("Es obligatorio"),
    edad: Yup.number()
        .min(13, "minimo 13 años")
        .max(100, "maximo 100 años")
        .integer("Debe ser un entero")
        .typeError("Debe ser un numero")
        .nullable(),
    acceptTerm: Yup.boolean()
        .oneOf([true], "debes aceptar terminos y condiciones")
})

function Register() {
    return (
        <div>
            <Formik initialValues={{
                name: "", email: "", password: "", confirmPassword: "",
                edad: "", acceptTerm: false
            }}
                validationSchema={RegisterSchema}
                onSubmit={async (values, { setSubmitting, setErrors, resetForm }) => {
                    try {
                        setSubmitting(true)
                        //fetch()
                        await new Promise((r) => setTimeout(r, 1000));
                        console.log(values)
                        resetForm()

                    } catch (error) {
                        //errores que vienen del servidor
                        setErrors("error del server")
                    }
                    finally {
                        setSubmitting(false)
                    }

                }}>

                {({ isSubmitting }) => (<Form noValidate>
                    <label htmlFor="name">nombre</label>
                    <Field id="name" name="name" />
                    <ErrorMessage name="name" component="div" />

                    <label htmlFor="email">email</label>
                    <Field id="email" name="email" type="email" />
                    <ErrorMessage name="email" component="div" />

                    <label htmlFor="password">password</label>
                    <Field id="password" name="password" type="password" />
                    <ErrorMessage name="password" component="div" />

                    <label htmlFor="confirmPassword">confirmPassword</label>
                    <Field id="confirmPassword" name="confirmPassword" type="password" />
                    <ErrorMessage name="confirmPassword" component="div" />

                    <label htmlFor="edad">Edad</label>
                    <Field id="edad" name="edad" type="number" />
                    <ErrorMessage name="edad" component="div" />

                    <label htmlFor="acceptTerm">nombre</label>
                    <Field id="acceptTerm" name="acceptTerm" type="checkbox" />
                    <ErrorMessage name="acceptTerm" component="div" />

                    <button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar"}
                    </button>
                </Form>
                )}



            </Formik>
        </div>
    )
}

export default Register