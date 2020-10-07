export const userTypeDef = `
  type User {
      id: Int!
      nombre: String!
      apellido:String!
      email: String!
      password: String!
  }
  input UserInput {
    id:Int
    nombre: String
    apellido:String
    email: String
    password: String
  }`;

export const userQueries = `
      allUser: [User]!
      userById(id: Int!): User!
  `;

export const userMutations = `
    createUser(usuario: UserInput!): User!
    updateUser(id: Int!, uruario: UserInput!): User!
    deleteUser(id: Int!): Int
`;
