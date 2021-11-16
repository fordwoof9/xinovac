import { executeQuery } from "../config/db";
const getAllRoom = async (req, res) => {
    let roomData=await executeQuery('select * from room',[]);
    res.send(roomData);
};

export { getAllRoom };
