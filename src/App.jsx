import Contact from './assets/Contact';
import Counter from './assets/Counter';
import Hello from './assets/Hello';

function App() {
  const helloData = [
    { name: 'Mayuranya', message: 'Hi there' },
    { name: 'Mafia', message: 'Hello..' }
  ];

  return (
    <div className='App'>
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="mayuranya1485@gmail.com" phone ="0991098345" />
    </div>
  );
}

export default App;
