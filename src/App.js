import './App.css';
import MyCars from './components/MyCars';

function App() {

  const cars = [
    {id: 1,brand: 'Porshe' , name: '911 Carrera', year: 2020, color: 'Vermelho', price:' R$875.000,00'},
    {id: 2, brand: 'Volvo', name: 'XC60', year: 2018, color: 'Azul', price:' R$435,000.00'},
    {id: 3,brand: 'Mitsubishi' ,name: 'Lancer', year: 2015, color: 'Preto', price:' R$125,000.00'}
  ]

  return (
    <div className="App">
      {cars.map((car) => (
        <MyCars 
        key={car.id}
        brand={car.brand}
        name={car.name}
        year={car.year}
        color={car.color}
        price={car.price}
        />
        ))}
    </div>
  );
}

export default App;
