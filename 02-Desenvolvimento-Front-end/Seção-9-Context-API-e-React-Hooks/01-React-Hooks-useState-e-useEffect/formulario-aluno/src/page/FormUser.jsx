import React, { useState } from "react";

export default function FormUser() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [city, setCity] = useState('');
  const [module, setModule] = useState('');

  return (
    <form>
      <label htmlFor="input__name">
        Name
        <input 
        type="text" 
        name="fullName" 
        id="input__name"
        value={name}
        onChange={ ({ target }) => setName(target.value)}
      />
      </label>
      <label htmlFor="input__age">
        Idade
        <input
          type="number" 
          name="age" 
          id="input__age" 
          value={age}
          onChange={ ({ target }) => setAge(target.value)}
        />
      </label>
      <label htmlFor="input__city">
        Cidade
        <input
          type="text"
          name="city"
          id="input__city"
          value={city}
          onChange={ ({ target }) => setCity(target.value)}
        />
      </label>
      <label htmlFor="input__module_1">
        <input 
          type="radio" 
          name="modules" 
          id="input__module_1" 
          value="Fundamentos"
          checked={module === 'Fundamentos'}
          onChange={({ target }) => setModule(target.value)}
        />
        Fundamentos
      </label>
      <label htmlFor="input__module_2">
        <input 
          type="radio" 
          name="modules" 
          id="input__module_2" 
          value="Front-end"
          checked={module === 'Front-end'}
          onChange={({ target }) => setModule(target.value)}
        />
        Front-end
      </label>
      <label htmlFor="input__module_3">
        <input 
          type="radio" 
          name="modules" 
          id="input__module_3" 
          value="Back-end"
          checked={module === 'Back-end'}
          onChange={({ target }) => setModule(target.value)}
        />
        Back-end
      </label>
      <label htmlFor="input__module_4">
        <input 
          type="radio" 
          name="modules" 
          id="input__module_4" 
          value="Ciência da Computação"
          checked={module === 'Ciência da Computação'}
          onChange={({ target }) => setModule(target.value)}
        />
        Ciência da Computação
      </label>
      <button type="button">Enviar</button>
    </form>
    )
}