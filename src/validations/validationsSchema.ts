import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required('El nombre es obligatorio'),
  email: Yup.string()
    .email('El correo electrónico no es válido')
    .required('El correo electrónico es obligatorio'),
  password: Yup.string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(/[A-Z]/, 'La contraseña debe contener al menos una mayúscula')
    .matches(/\d/, 'La contraseña debe contener al menos un número')
    .required('La contraseña es obligatoria'),
  phones: Yup.array().of(
    Yup.object().shape({
      number: Yup.string()
        .matches(/^\d+$/, 'El teléfono debe ser un número válido')
        .required('El número de teléfono es obligatorio'),
      citycode: Yup.string(),
      countrycode: Yup.string().required('El código es obligatorio'),
    })
  ),
});
