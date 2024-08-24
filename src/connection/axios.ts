import { handler } from "axios-wizard";
const { VITE_API_ORIGIN: apiOrigin } = import.meta.env;

const httpRequest = handler({ api: apiOrigin });

export default httpRequest;
