import axios from "axios"
import { ICrew } from "../interfaces/ICrew"
import { ICrewman } from "../interfaces/ICrewman"
import { crewmanServices } from "./crewmanServices"

export const crewServices = {

    getCrews: async () => {
        const got_crews  = await axios.get('http://localhost:3333/crew')
        return got_crews.data as ICrew[]
    },

    createCrew: async (name: string) => {
        await axios.post('http://localhost:3333/crew', { name })
    },

    editCrew: async (id: string, name: string) => {
        await axios.put(`http://localhost:3333/crew/${id}`, { name }) 
    },

    addCrewmanToCrew: async (crewmanId: string, crew: ICrew) => {
        const crewmen = await crewmanServices.getCrewmen()
        await axios.put(`http://localhost:3333/crew/${crew.id}`, {
            name: crew.name,
            crewmen: [...crew.crewmen, crewmen.filter((crewman: ICrewman) => crewman.id == crewmanId)[0]]
        })
    }
}