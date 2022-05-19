// import logo from './logo.svg';
import './App.css';

// import Hello from './components/Hello'
import Assign from './components/Assign'



function App() {
  let info=[
    { heading : "Mobile Operating System",p1 : "Android",p2: "Blckberry", p3: "iphone", p4: "windowsphone"},
    { heading : "Mobile Manufacturers",p1 : "Samsung",p2: "HTC", p3: "Micromax", p4: "Apple"}

]

  return (
    <div className="App">
      
        
        <Assign {...info[0]} />
        <Assign {...info[1]} />
        
       
    </div>
  );
}

export default App;
