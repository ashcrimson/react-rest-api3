import { useContext, useEffect } from 'react';
import SkillContext from '../../Context/SkillContext';
import { useParams } from 'react-router-dom';

export const SkillEdit = () => {
  const { 
    formValues, onChange, errors, setErrors, skill, getSkill, updateSkill} = useContext(SkillContext); 
  let {id} = useParams();

  useEffect(() => {
    getSkill(id);
    setErrors({})
  }, [])
  return (
    <div className='mt-12'>
      <form onSubmit={updateSkill}
      className='max-w-md mx-auto p-4 bg-white shadow-md rounded-sm'>
        <div className='space-y-6'>
          <div className='mb-4 '>
            <label htmlFor="nombreIndicador" className='block mb-2 text-sm font-medium'>
              Nombre Indicador
            </label>
            <input 
            name='nombreIndicador' 
            value={formValues["nombreIndicador"]} 
            onChange={onChange} 
            className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
          </div>
          {errors.nombreIndicador && <span className="text-sm text-red-400">{ errors.nombreIndicador[0]}</span>}
        </div>
        <div className='space-y-6'>
          <div className='mb-4 '>
            <label htmlFor="codigoIndicador" className='block mb-2 text-sm font-medium'>Código Indicador</label>
            <input 
            name='codigoIndicador' 
            value={formValues["codigoIndicador"]} 
            onChange={onChange} 
            className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
          </div>
          {errors.codigoIndicador && <span className="text-sm text-red-400">{ errors.codigoIndicador[0]}</span>}
        </div>
        <div className='space-y-6'>
          <div className='mb-4 '>
            <label htmlFor="unidadMedidaIndicador" className='block mb-2 text-sm font-medium'>Unidad Medida Indicador</label>
            <input 
            name='unidadMedidaIndicador' 
            value={formValues["unidadMedidaIndicador"]} 
            onChange={onChange} 
            className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
          </div>
          {errors.unidadMedidaIndicador && <span className="text-sm text-red-400">{ errors.unidadMedidaIndicador[0]}</span>}
        </div>
        <div className='space-y-6'>
          <div className='mb-4 '>
            <label htmlFor="valorIndicador" className='block mb-2 text-sm font-medium'>Valor Indicador</label>
            <input 
            name='valorIndicador' 
            value={formValues["valorIndicador"]} 
            onChange={onChange} 
            className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
          </div>
          {errors.valorIndicador && <span className="text-sm text-red-400">{ errors.valorIndicador[0]}</span>}
        </div>
        <div className='space-y-6'>
          <div className='mb-4 '>
            <label htmlFor="fechaIndicador" className='block mb-2 text-sm font-medium'>Fecha Indicador</label>
            <input 
            name='fechaIndicador' 
            value={formValues["fechaIndicador"]} 
            type="date"
            onChange={onChange} 
            className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
          </div>
          {errors.fechaIndicador && <span className="text-sm text-red-400">{ errors.fechaIndicador[0]}</span>}
        </div>
        <div className='space-y-6'>
          <div className='mb-4 '>
            <label htmlFor="origenIndicador" className='block mb-2 text-sm font-medium'>Origen Indicador</label>
            <input 
            name='origenIndicador' 
            value={formValues["origenIndicador"]} 
            onChange={onChange} 
            className='border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2' />
          </div>
          {errors.origenIndicador && <span className="text-sm text-red-400">{ errors.origenIndicador[0]}</span>}
        </div>
        <div className='my-4'>
          <button className='px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
            Update</button>
        </div>
      </form>
    </div>
  )
}

export default SkillEdit