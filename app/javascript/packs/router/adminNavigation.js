import ListJemaat from 'packs/screens/jemaat/list'
import ListSNK from 'packs/screens/diaken/listSnk'


const ListJemaatNav = {
  ListJemaat: {
    path: '/',
    component: ListJemaat
  }
}

const ListSNKNav = {
  ListSNK: {
    path: '/diaken/snk',
    component: ListSNK
  }
}

const AdminNavCollected = {
  ...ListJemaatNav,
  ...ListSNKNav
}

export default AdminNavCollected