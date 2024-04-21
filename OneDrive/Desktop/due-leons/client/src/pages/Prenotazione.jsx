import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Prenotazione = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    nomeAndCognome: '',
    cellulare: '',
    email: '',
    data: '',
    ora: '',
    persone: '',
    dettagliAggiuntivi: '',
  };

  const validationSchema = Yup.object({
    nomeAndCognome: Yup.string().required('Nome e Cognome è obbligatorio'),
    cellulare: Yup.number().required('Cellulare è obbligatorio'),
    email: Yup.string().email('Email non valida').required('Email è obbligatoria'),
    data: Yup.string().required('Data è obbligatoria'),
    ora: Yup.string().required('Ora è obbligatoria'),
    persone: Yup.number().required('Persone è obbligatorio'),
    dettagliAggiuntivi: Yup.string().notRequired(),
  });

  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3000/prenotazione', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Errore durante l\'invio della prenotazione');
      }

      setStatus({ success: true });
    } catch (error) {
      setStatus({ error: error.message });
    } finally {
      setIsSubmitting(false);
      setSubmitting(false)
    }
  };

  return (
    <div className="bg-neutral-300 pb-4" id="prenotazione">
      <h1 className="text-red-800 text-4xl my-4 pt-4 ml-6">Prenota un tavolo</h1>

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ status }) => (
          <Form className="flex flex-col justify-center items-center mx-6 bg-neutral-100 rounded-md">
            {status?.error && <p className="text-red-500">{status.error}</p>}
            {status?.success && <p className="text-green-500">Prenotazione inviata con successo!</p>}

            <div>
              <Field
                className="bg-neutral-700 text-neutral-50 text-lg flex justify-center mx-4 mt-4 w-80 p-2 rounded-md"
                placeholder="Nome e Cognome*"
                type="text"
                id="nomeAndCognome"
                name="nomeAndCognome"
              />
              <ErrorMessage name="nomeAndCognome" component="div" className="text-red-500" />
            </div>

            <div>
              <Field
                className="bg-neutral-700 text-neutral-50 text-lg flex justify-center mx-4 mt-4 w-80 p-2 rounded-md"
                placeholder="Cellulare*"
                type="number"
                id="cellulare"
                name="cellulare"
              />
              <ErrorMessage name="cellulare" component="div" className="text-red-500" />
            </div>

            <div>
              <Field
                className="bg-neutral-700 text-neutral-50 text-lg flex justify-center mx-4 mt-4 w-80 p-2 rounded-md"
                placeholder="Email*"
                type="email"
                id="email"
                name="email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500" />
            </div>

            <div>
              <Field
                className="bg-neutral-700 text-neutral-50 text-lg flex justify-center mx-4 mt-4 w-80 p-2 rounded-md"
                placeholder="Data*"
                type="date"
                id="data"
                name="data"
              />
              <ErrorMessage name="data" component="div" className="text-red-500" />
            </div>

            <div>
              <Field
                className="bg-neutral-700 text-neutral-50 text-lg flex justify-center mx-4 mt-4 w-80 p-2 rounded-md"
                placeholder="Ora*"
                type="time"
                id="ora"
                name="ora"
              />
              <ErrorMessage name="ora" component="div" className="text-red-500" />
            </div>

            <div>
              <Field
                className="bg-neutral-700 text-neutral-50 text-lg flex justify-center mx-4 mt-4 w-80 p-2 rounded-md"
                placeholder="Persone*"
                type="number"
                id="persone"
                name="persone"
              />
              <ErrorMessage name="persone" component="div" className="text-red-500" />
            </div>

            <div className="mb-4">
              <Field
                className="bg-neutral-700 text-neutral-50 text-lg flex justify-center mx-4 mt-4 w-80 p-2 rounded-md"
                placeholder="Dettagli Aggiuntivi(facoltativo)"
                type="text"
                id="dettagliAggiuntivi"
                name="dettagliAggiuntivi"
              />
              <ErrorMessage name="dettagliAggiuntivi" component="div" className="text-red-500" />
            </div>

            <button
              type="submit"
              className="bg-red-700 text-neutral-50 text-lg flex justify-center mx-4 my-4 w-80 p-2 rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Invio in corso...' : 'Prenota Tavolo'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Prenotazione;
