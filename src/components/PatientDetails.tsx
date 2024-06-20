import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../store/store";
import { toast } from "react-toastify";

interface PatientsProps {
  patient: Patient;
}
export default function PatientDetails({ patient }: PatientsProps) {
  const { deletePatient, getPatientById } = usePatientStore();
  const handleClick = () => {
    deletePatient(patient.id);
    toast.error("Paciente eliminado");
  };
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />

      <PatientDetailItem label="Propietario" data={patient.caretaker} />

      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha" data={patient.date.toString()} />

      <PatientDetailItem label="Sintomas" data={patient.symptoms} />

      <div className="flex flex-col lg:flex-row justify-between gap-3 mt-10">
        <button
          onClick={() => getPatientById(patient.id)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>

        <button
          onClick={handleClick}
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
