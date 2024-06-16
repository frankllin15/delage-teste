// 4. Crie um componente funcional chamado DynamicForm que renderize um formulário dinâmico. O formulário deve ser configurável através de um array de objetos que descrevem os campos (por exemplo, [{ label: 'Nome', type: 'text' }, { label: 'Idade', type: 'number' }]). Cada objeto no array deve resultar em um campo de entrada no formulário. Quando o formulário for submetido, exiba os valores dos campos abaixo do formulário.

import { useState } from "react";

type DynamicFormProps = {
  fields: {
    label: string;
    type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  }[];
};

export const DynamicForm = ({ fields }: DynamicFormProps) => {
  const defaultValues = fields.reduce((acc, field) => ({ ...acc, [field.label]: '' }), {} as { [key: string]: string });
  const [values, setValues] = useState(
    defaultValues
  );
  const [showValues, setShowValues] = useState(false);

  const handleChange = (key: string, value: string) => {
    setValues({ ...values, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowValues(true);
  };

  const resetForm = (e: React.FormEvent) => {
    e.preventDefault();

    setValues(defaultValues)
    setShowValues(false);
  }


  return (
    <form onSubmit={handleSubmit} className="px-4 py-8 space-y-8 bg-neutral-50 rounded-md shadow-md">
      <div>
        {fields.map((field, index) => (
          <div key={index} className="mb-4">
            <label className="block text-sm font-semibold">{field.label}</label>
            <input
              type={field.type}
              value={values[field.label] || ''}
              onChange={(e) => handleChange(field.label, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        ))}
      </div>

      <div>
        <button type="submit" className="bg-neutral-900 text-white px-4 py-2 rounded-md">
          Enviar
        </button>
        <button
          onClick={resetForm}
          className="ring-2 ring-neutral-900 font-semibold
        text-neutral-900 px-4 py-2 rounded-md ml-2">
          Limpar
        </button>
      </div>

      <div className="mt-4">
        {
          showValues &&
          <>
            <h2 className='text-2xl font-semibold'>Valores do Formulário</h2>

            {

              Object.entries(values).map(([key, value]) => (
                <p key={key}>
                  <span className="font-semibold">{key}:</span> {value}
                </p>
              ))}

          </>
        }
      </div>
    </form>
  );
};