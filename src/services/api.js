import axios from 'axios'

const HTTP = axios.create({
  baseURL: `${process.env.REACT_APP_IBX_API_URL}/api/v1/`,
  withCredentials: true,
  headers: {
    'X-Ied-Service-Token': process.env.REACT_APP_IED_SERVICE_TOKEN,
  },
})

const _get = async (endpoint = '', params = {}) => {
  try {
    const { data } = await HTTP.get(endpoint, { params })
    return data
  } catch (e) {
    return Promise.reject(e)
  }
}

const API = {
  pieToken: async () => {
    return _get('auth/pie/token')
  },

  filters: async () => {
    return _get('filters')
  },

  items: async (filters = {}) => {
    return _get('items', filters)
  },

  assessment: async ({ assessmentId }) => {
    return await _get(`assessments/${assessmentId}`)
  },

  assessmentQuestions: async ({ assessmentId }) => {
    return _get(`assessments/${assessmentId}/questions`)
  },
}

export default API
