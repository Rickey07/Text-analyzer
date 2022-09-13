// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/Textform";

let name = "Prabadhya Upadhyay";
function App() {
  return (
    <>
      <Navbar title="TextUtils"></Navbar>
      <TextForm heading="Enter text to analyze"></TextForm>
    </>
  );
}

export default App;
