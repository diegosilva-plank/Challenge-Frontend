import axios from "axios"
import { ICrewman } from "../interfaces/ICrewman"

export const crewmanServices = {
    
    getCrewmen: async () => {
        const got_crewmen = await axios.get('http://localhost:3333/crewman')
        return got_crewmen.data as ICrewman[]
    }
}