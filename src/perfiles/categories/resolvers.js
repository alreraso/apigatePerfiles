import { generalRequest, getRequest } from '../../utilities';
import {nodoPerfiles,puertoPerfiles, allProfiles,postProfile,editProfile,editPassword,activeProfile } from './server';

const URL0 = `http://${nodoPerfiles}:${puertoPerfiles}/${allProfiles}`;
const URL1 = `http://${nodoPerfiles}:${puertoPerfiles}/${postProfile}`;
const URL2 = `http://${nodoPerfiles}:${puertoPerfiles}/${editProfile}`;
const URL3 = `http://${nodoPerfiles}:${puertoPerfiles}/${editPassword}`;
const URL4 = `http://${nodoPerfiles}:${puertoPerfiles}/${activeProfile}`;
console.log(URL0);
const resolvers = {
	Query: {
		allPerfiles: (_) =>
			getRequest(URL0, ''),
		profileById: (_, { id }) =>
			generalRequest(`${URL1}/${id}`, 'GET'),
	},
	Mutation: {
		createProfile: (_, { perfil }) =>
			generalRequest(`${URL1}/`, 'POST', perfil),
		updateProfile: (_, { id, perfil }) =>
			generalRequest(`${URL2}/${id}`, 'PUT', perfil),
		updateProfilePassword: (_, { id, perfil }) =>
			generalRequest(`${URL3}/${id}`, 'PUT', perfil),
		deleteProfile: (_, { id }) =>
			generalRequest(`${URL4}/${id}`, 'PUT', perfil),
	}
};

export default resolvers;
