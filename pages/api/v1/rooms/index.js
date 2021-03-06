import nc from 'next-connect';
import connectDB from '../../../../connect-database/db.js';
import {
  getAllRooms,
  createRoom,
} from '../../../../controllers/room-controller.js';

import onError from '../../../../middleware/error.js';

const handler = nc({ onError });

connectDB();

handler.get(getAllRooms);
handler.post(createRoom);

export default handler;
