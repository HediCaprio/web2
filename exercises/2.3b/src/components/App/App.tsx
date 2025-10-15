import './App.css'

interface Person {
  name: String,
  age: number,
}

const person: Person[] = [
  {
    name:"Alice",
    age:25,
  },
  {
    name:"Bob",
    age:30,
  },
  {
    name:"Charlie",
    age:35,
  }
]


const App = () => {
  const title = "Welcome to My App";
  const footerText = "© 2023 My App";
  return (
    <div>
      <h1>{title}</h1>
      {person.map((personne ) => (
        <div>
        <h2>{personne.name}</h2>
        <p>Age: {personne.age}</p>
      </div>
      ))
      }
      <footer>{footerText}</footer>
    </div>
  );
};

export default App;
