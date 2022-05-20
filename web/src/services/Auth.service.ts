import axios, { AxiosRequestConfig } from 'axios';
import { Team } from '../types';
import { HOST_API } from '../config';

export const login = async (team: Team) => {
	let config: AxiosRequestConfig = {
		method: 'post',
		url: `${HOST_API}/login`,
		data: team,
		withCredentials: true
	};
	try {
		let resp = await axios(config);
		if (resp.status === 200) {
			return resp.data.data as Team;
		}
		else {
			return resp.data.data as string;
		}
	} catch (error) {
		//console.error(error);
		//throw error;
		return null;
	}
}

export const verify = async () => {
	let config: AxiosRequestConfig = {
		method: 'post',
		url: `${HOST_API}/verify`,
		withCredentials: true
	};
	try {
		let resp = await axios(config);
		if (resp.status === 200) {
			return resp.data.data as Team;
		}
		else {
			return null;
		}

	} catch (error) {
		//console.error(error);
		//throw error;
		return null;
	}

}

export const logout = async () => {
	let config: AxiosRequestConfig = {
		method: 'post',
		url: `${HOST_API}/logout`,
		withCredentials: true
	};
	try {
		let resp = await axios(config);
	} catch (error) {
		//console.error(error);
		//throw error;
		return null;
	}
}