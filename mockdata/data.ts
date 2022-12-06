export const usersData = [
  {
    id: '1',
    login: 'test',
    password: 'test',
  },
  {
    id: '2',
    login: 'admin',
    password: 'admin',
  },
];

export const rulesData = [
  {
    id: '1',
    name: 'Выкуп',
    percent: 15,
    min: 400,
    max: 1000,
    user: '1',
  },
  {
    id: '2',
    name: 'Продажа',
    percent: 10,
    min: 600,
    max: 1200,
    user: '2',
  },
];

export const partners = [
  {
    id: '1',
    name: 'Медведев',
    surname: 'Тимофей',
    parentname: 'Сергеевич',
    phone: '89964273179',
    mail: null,
    address: '',
    inn: '',
    bank: '',
    paynumber: null,
    bik: '',
    kpp: '',
    organization: null,
    type: '',
    pricerule: '1',
    user: '1',
  },
  {
    id: '2',
    name: 'Медведев',
    surname: 'Тимофей',
    parentname: 'Сергеевич',
    phone: '89964273179',
    mail: null,
    address: '',
    inn: '',
    bank: '',
    paynumber: null,
    bik: '',
    kpp: '',
    organization: null,
    type: '',
    pricerule: '1',
    user: '1',
  },
];

export const nomenclature = [
  {
    id: '1',
    brand: 'Test',
    model: 'Test',
    width: 120,
    profile: 80,
    diameter: 16,
    index: '99Q',
    year: 2015,
    description: 'test',
    type: 'tire',
    season: 'winter',
    status: 'new',
    user: '1',
  },
  {
    id: '2',
    brand: 'Test2',
    model: 'Test2',
    width: 120,
    profile: 80,
    diameter: 16,
    index: '99Q',
    year: 2015,
    description: 'test',
    type: 'tire',
    season: 'winter',
    status: 'new',
    user: '1',
  },
];

export const items = [
  {
    id: '1',
    amount: 3,
    price: 10000,
    store: 'Test',
    image: 'json24c154673-8f91-4bb3-9c93-1e37d7a75554.jpeg',
    user: '1',
  },
  {
    id: '2',
    amount: 3,
    price: 10000,
    store: 'Test',
    image: 'json24c154673-8f91-4bb3-9c93-1e37d7a75554.jpeg',
    user: '1',
  },
];

export const purchases = [
  {
    id: '1',
    organization: 'testOrg',
    supplier: 'testSup',
    stock: 'testStock',
    sum: 10000,
    partner: '1',
    item: '1',
    document: 'testDock',
    user: '1',
  },
  {
    id: '2',
    organization: 'testOrg2',
    supplier: 'testSup2',
    stock: 'testStock2',
    sum: 15000,
    partner: '1',
    item: '1',
    document: 'testDock2',
    user: '1',
  },
];
