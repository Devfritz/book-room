import nc from 'next-connect';
import connectDB from '../../../../connect-database/db.js';
import {
  getAllRooms,
  createRoom,
} from '../../../../controllers/room-controller.js';

const handler = nc();

connectDB();

handler.get(getAllRooms);
handler.post(createRoom);

export default handler;
