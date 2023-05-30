import axios from 'axios'
import { ICrewman } from '../interfaces/ICrewman'

export const crewmanServices = {
  getCrewmen: async () => {
    const got_crewmen = await axios.get('http://localhost:3333/crewman')
    return got_crewmen.data as ICrewman[]
  },

  createCrewman: async (name: string, patent: string) => {
    await axios.post(`http://localhost:3333/crewman`, { name, patent })
  },

  editCrewman: async (id: string, name: string, patent: string) => {
    await axios.put(`http://localhost:3333/crewman/${id}`, { name, patent })
  },

  deleteCrewman: async (id: string) => {
    await axios.delete(`http://localhost:3333/crewman/${id}`)
  },
}
