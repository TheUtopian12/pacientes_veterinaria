import PatientsForm from "./components/PatientsForm";
import { PatientsList } from "./components/PatientsList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
          Seguimineto de Pacientes {""}
          <span className="text-indigo-700">Veterinaria</span>
        </h1>

        <div className="mt-12 md:flex">
          <PatientsForm />

          <PatientsList />
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
