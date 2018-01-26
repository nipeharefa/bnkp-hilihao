import ListJemaat from '../screens/jemaat/list';
import CreateJemaat from '../screens/jemaat/create';
import ShowJemaat from '../screens/jemaat/show';
import ListSNK from '../screens/diaken/listSnk';
import ListLingkungan from '../screens/lingkungan/list';
import CreateLingkungan from '../screens/lingkungan/create';

const ListJemaatNav = {
  ListJemaat: {
    path: '/',
    component: ListJemaat,
  },
};

const ListSNKNav = {
  ListSNK: {
    path: '/diaken/snk',
    component: ListSNK,
  },
};

const CreateJemaatNav = {
  CreateJemaat: {
    path: '/jemaat/create',
    component: CreateJemaat,
  },
};

const ShowJemaatNav = {
  ShowJemaat: {
    path: '/jemaat/:id',
    component: ShowJemaat,
  },
};

// Lingkungan
const CreateLingkunganNav = {
  CreateLingkungan: {
    path: '/lingkungan/create',
    component: CreateLingkungan,
  },
};
const ListLingkunganNav = {
  ListLingkungan: {
    path: '/lingkungan',
    component: ListLingkungan,
  },
};
// Lingkungan Gabungan

const AdminNavCollected = {
  ...ListJemaatNav,
  ...ListSNKNav,
  ...CreateJemaatNav,
  ...ShowJemaatNav,
  // Lingkungan
  ...CreateLingkunganNav,
  ...ListLingkunganNav,
};

export default AdminNavCollected;
