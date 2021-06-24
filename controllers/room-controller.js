import Room from '../models/rooms-model.js';

/**
 *
 * @desc create a new room
 * @route /api/v1/rooms
 * @access Private
 */

export const createRoom = async (req, res) => {
  try {
    const newRoom = await Room.create(req.body);
    res.status(200).json({
      isSucces: true,
      data: newRoom,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({
      isSucces: false,
      message: error,
    });
  }
};

/**
 *
 * @desc get all rooms
 * @route /api/v1/rooms
 * @access public
 */

export const getAllRooms = async (req, res) => {
  try {
    const getRooms = await Room.find();

    res.status(200).json({
      isStatus: true,
      count: getRooms.length,
      data: getRooms,
    });
  } catch (error) {
    res.status(400).json({
      isSucces: false,
      message: error,
    });
  }
};
