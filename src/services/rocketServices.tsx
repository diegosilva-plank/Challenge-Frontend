import axios from 'axios'

export const rocketServices = {
  getRockets: async () => {
    const got = await axios.get('http://localhost:3333/rocket')
    return got.data
  },

  createRocket: async (name: string) => {
    await axios.post('http://localhost:3333/rocket', { name })
  },

  editRocket: async (id: string, name: string) => {
    await axios.put(`http://localhost:3333/rocket/${id}`, { name })
  },

  deleteRocket: async (id: string) => {
    await axios.delete(`http://localhost:3333/rocket/${id}`)
  },
}
