import './App.css';
import Card from './components/Card';

function App() {
  // let myObj = { name: 'Basirul', age: '45' };
  // let myArr = [3, 4, 5];
  const desc1 =
    '“Tailwind CSS is the only framework that I have seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.';
  const desc2 =
    'Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum';
  return (
    <>
      <h1 className="bg-green-400 text-black p-20 rounded-xl">Tailwind Test</h1>
      <Card
        myName="Sarah Jyne"
        description={desc1}
        image="https://images.pexels.com/photos/28870747/pexels-photo-28870747/free-photo-of-cinematic-urban-portrait-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Card
        myName="Dyna James"
        description={desc2}
        image="https://images.pexels.com/photos/28945197/pexels-photo-28945197/free-photo-of-serene-autumn-portrait-of-woman-in-nature.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Card
        description={desc1}
        image="https://images.pexels.com/photos/28870747/pexels-photo-28870747/free-photo-of-cinematic-urban-portrait-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </>
  );
}

export default App;
