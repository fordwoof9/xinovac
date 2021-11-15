import nc from "next-connect";
import { getAllUser } from '../../controller/user'

const handler = nc();
handler.get(getAllUser);
export default handler;