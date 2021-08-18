import React, {useState} from 'react';

export const HooksDemo = () => {
  
  const [input, setValue] = useState("");
  const [name, setName] = useState('Vasya');
  
  const handleInput = (event) => {
    setValue(event.target.value);
  }
  
  const updateName = (event) => {
    event.preventDefault();
    setName(input);
    setValue("");
  }
  
  return (
    <div className="box">
      <h1>
        Привет, <span>{name}!</span>   
      </h1>
      
      <form className="form">
        
        <div class="field">
          <label for="name-1">Имя</label>
          <div class="control">
            <input type="text" value={input} name="name-1" onChange={handleInput} class="input"/>
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button onClick={updateName} class="button is-dark">Обновить</button>
          </div>
        </div>
      </form>
      
    </div>
  )
}