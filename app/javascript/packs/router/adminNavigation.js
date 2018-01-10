import ListJemaat from 'packs/screens/jemaat/list'
import CreateJemaat from 'packs/screens/jemaat/create'
import ShowJemaat from 'packs/screens/jemaat/show'
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

const CreateJemaatNav = {
  CreateJemaat: {
    path: '/jemaat/create',
    component: CreateJemaat
  }
}

const ShowJemaatNav = {
  ShowJemaat: {
    path: '/jemaat/:id',
    component: ShowJemaat,
  }
}

const AdminNavCollected = {
  ...ListJemaatNav,
  ...ListSNKNav,
  ...CreateJemaatNav,
  ...ShowJemaatNav,
}

export default AdminNavCollected
