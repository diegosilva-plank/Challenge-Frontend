import axios from 'axios'

export const launchServices = {
  getLaunches: async () => {
    const got = await axios.get('http://localhost:3333/launch')
    return got.data
  },

  createLauch: async (rocket_id: string, launch: any) => {
    await axios.post('http://localhost:3333/launch', {
      rocket: rocket_id,
      ...launch,
    })
  },

  editLaunch: async (launch: any) => {
    await axios.put(`http://localhost:3333/launch/${launch.id}`, {
      launch_code: launch.launch_code,
      date: launch.date,
      success: launch.success,
      crew: launch.crew,
    })
  },

  deleteLaunch: async (id: string) => {
    await axios.delete(`http://localhost:3333/launch/${id}`)
  },
}
