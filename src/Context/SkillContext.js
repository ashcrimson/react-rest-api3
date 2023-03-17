import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.defaults.baseURL = "http://client-api.test/api/";

const SkillContext = createContext();

const initialForm = {
  
    nombreIndicador:"",
    codigoIndicador:"",   
    unidadMedidaIndicador:"", 
    unidadMedidaIndicador:"", 
    valorIndicador:"",
    fechaIndicador:"",
    origenIndicador:""

};

export const SkillProvider = ({children}) => {
    const [formValues, setFormValues] = useState(initialForm);
      const [skills, setSkills] = useState([]);
      const [skill, setSkill] = useState([]);
      const [errors, setErrors] = useState({});
      const navigate = useNavigate();

      const onChange = (e) => {
        const { name, value } = e.target;
        setFormValues({...formValues, [name]: value});
      };

      constimportSkills = async () => {
        await axios.post("http://client-api.test/indicadores/consulta");
      }

      const getSkills = async () => {
        const apiSkills = await axios.get("indicadores");
        setSkills(apiSkills.data.data);
      };

      const getSkill = async (id) => {
        const response = await axios.get("indicadores/" + id);
        const apiSkill = response.data.data;
        setSkill(apiSkill);
        setFormValues({
            nombreIndicador: apiSkill.nombreIndicador,
            codigoIndicador: apiSkill.codigoIndicador,
            unidadMedidaIndicador: apiSkill.unidadMedidaIndicador,
            valorIndicador: apiSkill.valorIndicador,
            fechaIndicador: apiSkill.fechaIndicador,
            origenIndicador: apiSkill.origenIndicador,
        })
      };

      const storeSkill = async(e) => {
        e.preventDefault();
        try{
            await axios.post("indicadores/guardar", formValues);
            setFormValues(initialForm);
            navigate("/skills");
        } catch(e) {
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }
        }
      };

      const updateSkill = async(e) => {
        e.preventDefault();
        try{
            await axios.put("indicadores/" + skill.id, formValues);
            setFormValues(initialForm);
            navigate("/skills");
        } catch(e){
            setErrors(e.response.data.errors);
        }
      };

      const deleteSkill = async(id) => {
        if(!window.confirm("Are you sure")){
            return;
        }
        await axios.delete("indicadores/" + id);
        getSkills();
      }

    return <SkillContext.Provider 
    value={{
        skill, 
        skills, 
        getSkill, 
        getSkills, 
        onChange, formValues, storeSkill, errors, updateSkill, deleteSkill, setErrors
        }}>
        {children}</SkillContext.Provider>
}

export default SkillContext;