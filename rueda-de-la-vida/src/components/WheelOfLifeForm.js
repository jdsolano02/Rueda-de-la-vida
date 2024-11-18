import React, { useState } from "react";

const areas = [
  "Salud física",
  "Trabajo",
  "Situación financiera",
  "Estado emocional",
  "Diversión y ocio",
  "Familia y amigos",
  "Relación sentimental",
  "Desarrollo personal",
];

const WheelOfLifeForm = ({ onGenerate }) => {
  const [values, setValues] = useState(Array(areas.length).fill(1));

  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onGenerate(values);
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold mb-4 text-center">
        Paso N°1. ¿Dónde nos encontramos en este momento?
      </h2>
      <p className="mb-4">
        Instrucción: Puntúa del 1 al 10 en cada una de las siguientes áreas,
        siendo un 1 la puntuación más baja y 10 la más alta.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {areas.map((area, index) => (
          <div key={index} className="flex justify-between items-center">
            <label htmlFor={`area${index}`} className="mr-4">
              {area}:
            </label>
            <input
              type="number"
              id={`area${index}`}
              name={`area${index}`}
              min="1"
              max="10"
              value={values[index]}
              onChange={(e) => handleChange(index, +e.target.value)}
              className="border rounded px-2 py-1 w-20"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Generar Rueda
        </button>
      </form>
    </div>
  );
};

export default WheelOfLifeForm;
