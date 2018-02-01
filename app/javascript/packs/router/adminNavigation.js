import ListJemaat from '../screens/jemaat/list';
import CreateJemaat from '../screens/jemaat/create';
import ShowJemaat from '../screens/jemaat/show';
import ListSNK from '../screens/diaken/listSnk';
import ListLingkungan from '../screens/lingkungan/list';
import CreateLingkungan from '../screens/lingkungan/new';

// Lingkungan Gabungan
import ListLingkunganGabungan from '../screens/gabungan/list';
import CreateLingkunganGabungan from '../screens/gabungan/new';

// root
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
const ListLingkunganGabunganNav = {
  ListLingkungan: {
    path: '/lingkungan-gabungan',
    component: ListLingkunganGabungan,
  },
};

const CreateLingkunganGabunganNav = {
  ListLingkungan: {
    path: '/lingkungan-gabungan/create',
    component: CreateLingkunganGabungan,
  },
};

const AdminNavCollected = {
  ...ListJemaatNav,
  ...ListSNKNav,
  ...CreateJemaatNav,
  ...ShowJemaatNav,
  // Lingkungan
  ...CreateLingkunganNav,
  ...ListLingkunganNav,
  // Lingkungan Gabungan
  ...ListLingkunganGabunganNav,
  // ...CreateLingkunganGabunganNav,
};

export default AdminNavCollected;
