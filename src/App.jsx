import "./App.css";
import { Form } from "./components/Form";
function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-100 to-blue-100 flex flex-col items-center justify-center py-12">
        <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
          Email Tool
        </h2>
        <Form />
      </div>
    </>
  );
}

export default App;
