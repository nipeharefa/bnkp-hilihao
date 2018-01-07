import axios from 'axios'

axios.defaults.baseURL = window.location.origin
axios.defaults.responseType = 'json'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content')
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

export default axios