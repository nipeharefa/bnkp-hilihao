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
const Dashboard = {
  Dashboard: {
    path: '/',
    component: ListJemaat,
  },
};

const JemaatManagement = {
  listJemaat: {
    path: '/jemaat',
    component: ListJemaat,
  },
  createNewJemaat: {
    path: '/jemaat/create/',
    component: CreateJemaat,
  },
  showJemaat: {
    path: '/jemaat/:id',
    component: ShowJemaat,
  },
};

const LingkunganManagement = {
  listLingkungan: {
    path: '/lingkungan',
    component: ListLingkungan,
  },
  createLingkungan: {
    path: '/lingkungan/create',
    component: CreateLingkungan,
  },
};

const LingkunganGabunganManagement = {
  listLingkunganGabungan: {
    path: '/lingkungan-gabungan',
    component: ListLingkunganGabungan,
  },
  createLingkunganGabungan: {
    path: '/lingkungan-gabungan/create',
    component: CreateLingkunganGabungan,
  },
};

const AdminNavCollected = {
  ...Dashboard,
  ...JemaatManagement,
  ...LingkunganManagement,
  ...LingkunganGabunganManagement,
};

export default AdminNavCollected;
