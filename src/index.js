import React from 'react';
import ReactDOM from 'react-dom/client';
import { Input } from './components/Input';
import { Output } from './components/Output';


const root = ReactDOM.createRoot(document.getElementById('root'));
const App = () => {
  const [name, age] = React.useState();
  return (
    <div class="container">
      <h1> Age Guesser </h1>
      <Input name={name} age={age} > </Input>
      <Output age={age}> </Output>
    </div>
  );

}
root.render(<App/>);

