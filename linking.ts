const config = {
  screens: {
    HomeScreen: {
      path: 'home',
    },
    SettingScreen: {
      path: 'setting',
    },
    ProfileScreen: {
      path: 'profile/:id',
      parse: {
        id: (id: any) => `${id}`,
      },
    },
  },
};

const linking = {
  prefixes: ['myapp://app'],
  config,
};

export default linking;
