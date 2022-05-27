import axios, { AxiosRequestConfig } from "axios";
import { HOST_API } from "../config";

export const leaderboard = async () => {
	let config: AxiosRequestConfig = {
		method: 'GET',
		url: `${HOST_API}/team`,
		withCredentials: true
	};
	try {
		let resp = await axios(config);
		if (resp.status === 200) {
			return resp.data.data;
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


export const flags = async () => {
	let config: AxiosRequestConfig = {
		method: 'GET',
		url: `${HOST_API}/flag`,
		withCredentials: true
	};
	try {
		let resp = await axios(config);
		if (resp.status === 200) {
			return resp.data.data;
		}
		else {
			return null;
		}

	} catch (error) {
		return null;
	}
}
export const submitsecret = async (secret: string) => {
	let config: AxiosRequestConfig = {
		method: 'POST',
		data: {
			secret: secret
		},
		url: `${HOST_API}/submit`,
		withCredentials: true
	};
	try {
		let resp = await axios(config);
		if (resp.status === 200) {
			return resp.data;
		}
		else {
			return null;
		}

	} catch (error) {
		return null;
	}
}