import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray, FieldProps } from 'formik';
import { AddUserModalProps, User } from '../../interfaces/userDataInterface';
import { handleSubmit, handleDelete } from '../../handlers/userHandlers';
import { useCountryOptions } from '../../utils/country-options/countryOptions';
import { validationSchema } from '../../validations/validationsSchema';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faTimes } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import './addUserComponent.css';

const AddUserModal: React.FC<AddUserModalProps> = ({
  closeModal,
  contact,
  setAlerts,
}) => {
  const initialValues = {
    id: contact ? contact.id : '',
    name: contact ? contact.name : '',
    email: contact ? contact.email : '',
    password: '',
    phones: contact
      ? contact.phones.map((phone) => ({
          number: phone.number,
          citycode: phone.citycode,
          countrycode: phone.countrycode,
        }))
      : [{ number: '', citycode: '', countrycode: '' }],
    isactive: contact ? contact.isactive : false,
    last_login: contact ? contact.last_login : '',
  };

  const [showPassword, setShowPassword] = useState(false);
  const setUsersList = useState<User[]>([])[1];
  const countryOptions = useCountryOptions();

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">
            {contact ? 'Visualizar Contacto' : 'Agregar Contacto'}
          </h2>

          <FontAwesomeIcon
            icon={faTimes}
            className="close-icon"
            onClick={() => closeModal()}
          />
        </div>
        <br />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            if (contact && !values.isactive) {
              await handleDelete(values.id, setUsersList, setAlerts, () => {});
              closeModal();
            } else {
              await handleSubmit(values, setAlerts, closeModal);
            }
          }}
        >
          {({ values, setFieldValue, errors, touched }) => (
            <Form>
              <div className="modal-body">
                <label>Nombre</label>
                <Field type="text" name="name" className="form-input" />
                {touched.name && errors.name && (
                  <div className="error">{errors.name}</div>
                )}

                <label>Email</label>
                <Field type="email" name="email" className="form-input" />
                {touched.email && errors.email && (
                  <div className="error">{errors.email}</div>
                )}

                {!contact && (
                  <>
                    <label>Contraseña</label>
                    <div className="password-input-container">
                      <Field
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className="form-input"
                      />
                      <button
                        type="button"
                        className="password-toggle-btn"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          className="eye-icon"
                        />
                      </button>
                    </div>
                    {touched.password && errors.password && (
                      <div className="error">{errors.password}</div>
                    )}
                  </>
                )}

                <label>Teléfono</label>
                <div className="phone-input-content">
                  <FieldArray name="phones">
                    {() => (
                      <div>
                        {values.phones.map((_, index) => (
                          <div key={index}>
                            <div className="phone-row">
                              <Field name={`phones[${index}].countrycode`}>
                                {({ field, form }: FieldProps<User>) => (
                                  <Select
                                    {...field}
                                    className="select-input"
                                    options={countryOptions}
                                    onChange={(selectedOption) => {
                                      if (selectedOption) {
                                        form.setFieldValue(
                                          `phones[${index}].countrycode`,
                                          selectedOption.value
                                        );
                                      }
                                    }}
                                    placeholder="+"
                                    value={
                                      form.values.phones[index].countrycode
                                        ? countryOptions.find(
                                            (option) =>
                                              option.value ===
                                              form.values.phones[index]
                                                .countrycode
                                          ) || null
                                        : countryOptions[0]
                                    }
                                  />
                                )}
                              </Field>

                              <Field name={`phones[${index}].number`}>
                                {({ field, form }: FieldProps<User>) => (
                                  <input
                                    {...field}
                                    type="text"
                                    className="form-input fullNumberInput"
                                    placeholder="(Código de ciudad) Número"
                                    value={`(${
                                      form.values.phones[index].citycode || ''
                                    }) ${
                                      form.values.phones[index].number || ''
                                    }`}
                                    onChange={(e) => {
                                      const value = e.target.value
                                        .replace(/\s+/g, '')
                                        .replace(/[^0-9]/g, '');

                                      const citycode = value.slice(0, 1);
                                      const number = value.slice(1);

                                      form.setFieldValue(
                                        `phones[${index}].citycode`,
                                        citycode
                                      );
                                      form.setFieldValue(
                                        `phones[${index}].number`,
                                        number
                                      );
                                    }}
                                  />
                                )}
                              </Field>
                            </div>

                            {touched.phones &&
                              touched.phones[index] &&
                              errors.phones &&
                              typeof errors.phones[index] === 'object' && (
                                <div className="error">
                                  {errors.phones[index].number && (
                                    <div>{errors.phones[index].number}</div>
                                  )}
                                  {errors.phones[index].citycode && (
                                    <div>{errors.phones[index].citycode}</div>
                                  )}
                                  {errors.phones[index].countrycode && (
                                    <div>
                                      {errors.phones[index].countrycode}
                                    </div>
                                  )}
                                </div>
                              )}
                          </div>
                        ))}
                      </div>
                    )}
                  </FieldArray>
                </div>
                {contact && (
                  <div className="switch-container">
                    <label htmlFor="isActive" className="switch-label">
                      Activo
                    </label>
                    <label className="switch">
                      <input
                        type="checkbox"
                        id="isActive"
                        checked={values.isactive}
                        onChange={(e) => {
                          setFieldValue('isactive', e.target.checked);
                          console.log('isactive:', e.target.checked);
                        }}
                      />

                      <span className="slider"></span>
                    </label>
                  </div>
                )}
              </div>
              <br />
              <div className="modal-footer">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
                <button type="submit" className="submit-btn">
                  Guardar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddUserModal;
