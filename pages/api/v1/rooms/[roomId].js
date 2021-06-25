import nc from 'next-connect';
import connectDB from '../../../../connect-database/db.js';
import {
  getOneRoom,
  updateRooms,
  deleteRoom,
} from '../../../../controllers/room-controller.js';

import onError from '../../../../middleware/error.js';

const handler = nc({ onError });

connectDB();

handler.get(getOneRoom);
handler.put(updateRooms);
handler.delete(deleteRoom);

export default handler;
