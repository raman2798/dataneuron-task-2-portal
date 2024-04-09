const apiEndpoints = {
  users: {
    create: () => '/users',
    readAll: () => '/users',
    readById: (id: string) => `/users/${id}`,
    updateById: (id: string) => `/users/${id}`,
    search: () => '/users/search',
    getUserCounts: () => '/users/count',
  },
};

export default apiEndpoints;
