export const perfilTypeDef = `
  type Perfil {
      id: Int!
      nombre: String!
      segundoNombre: String!
      apellido: String!
      segundoApellido: String!
      email: String!
      constrasena: String!
      estado: Boolean!
      ubicacion: String!
      descripcion: String!
  }
  input PerfilInput {
      id: Int
      nombre: String
      segundoNombre: String
      apellido: String
      segundoApellido: String
      email: String
      constrasena: String
      estado: Boolean
      ubicacion: String
      descripcion: String
  }`;

export const perfilQueries = `
      allPerfiles: [Perfil]!
      profileById(id: Int!): Perfil!
  `;

export const perfilMutations = `
    createProfile(perfil: PerfilInput!): Perfil!
    updateProfile(id: Int!, perfil: PerfilInput!): Perfil!
    updateProfilePassword(id: Int!, perfil: PerfilInput!): Perfil!
    deleteProfile(id: Int!, perfil: PerfilInput!): Perfil!
`;
