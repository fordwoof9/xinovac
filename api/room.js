import nc from "next-connect";
import { getAllRoom } from "../controller/room";

const handler=nc();
handler.get(getAllRoom);
export default handler;