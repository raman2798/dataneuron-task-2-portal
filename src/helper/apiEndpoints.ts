const apiEndpoints = {
  users: {
    create: () => '/users',
    readAll: () => '/users',
    readById: (id: string) => `/users/${id}`,
    updateById: (id: string) => `/users/${id}`,
    search: () => '/users/search',
  },
};

export default apiEndpoints;
