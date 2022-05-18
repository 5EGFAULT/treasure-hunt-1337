interface t_response {
	status: number;
	message: string;
	data: any;
}

export const responses: { [key: string]: t_response } = {
	ok: { status: 200, message: "ok", data: null },
	created: { status: 201, message: "created", data: null },
	no_content: { status: 204, message: "no content", data: null },
	bad_request: { status: 400, message: "bad request", data: null },
	unauthorized: { status: 401, message: "unauthorized", data: null },
	forbidden: { status: 403, message: "forbidden", data: null },
	not_found: { status: 404, message: "not found", data: null },
	internal_server_error: { status: 500, message: "internal server error", data: null },

}

export default t_response;