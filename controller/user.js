import { executeQuery } from "../config/db";
const getAllUser = async (req, res) => {
    let roomData=await executeQuery('select * from user',[]);
    res.send(roomData);
};

export { getAllUser };
