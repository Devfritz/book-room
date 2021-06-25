import Room from '../models/rooms-model.js';
import mongoose from 'mongoose';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsync from '../middleware/catchAsync.js';

/**
 *
 * @desc create a new room
 * @route POST /api/v1/rooms
 * @access Private
 */

export const createRoom = catchAsync(async (req, res) => {
  const newRoom = await Room.create(req.body);

  res.status(200).json({
    isSucces: true,
    data: newRoom,
  });
});

/**
 *
 * @desc get all rooms
 * @route GET /api/v1/rooms
 * @access public
 */

export const getAllRooms = catchAsync(async (req, res) => {
  const getRooms = await Room.find();

  res.status(200).json({
    isStatus: true,
    count: getRooms.length,
    data: getRooms,
  });
});

/**
 *
 * @desc get one room
 * @route  GET /api/v1/rooms/:roomId
 * @access public
 */

export const getOneRoom = catchAsync(async (req, res, next) => {
  const room = await Room.findById(req.query.roomId);

  if (!room) return next(new ErrorHandler('Ressource not found', 404));

  res.status(200).json({
    isStatus: true,
    data: room,
  });
});

/**
 *
 * @desc update one room
 * @route PUT /api/v1/rooms/:roomId
 * @access private
 */

export const updateRooms = catchAsync(async (req, res) => {
  // if (!mongoose.isValidObjectId(req.query.roomId)) {
  //   return res.status(400).json({
  //     isSucces: false,
  //     message: 'invalid object id',
  //   });
  // }
  const room = await Room.findById(req.query.roomId);

  if (!room) return next(new ErrorHandler('Ressource not found', 404));

  const updateRoom = await Room.findByIdAndUpdate(req.query.roomId, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    isStatus: true,
    data: updateRoom,
  });
});

/**
 *
 * @desc delete room
 * @route  DELETE /api/v1/rooms/:roomId
 * @access private
 */

export const deleteRoom = catchAsync(async (req, res) => {
  const room = await Room.findById(req.query.roomId);

  if (!mongoose.isValidObjectId(req.query.roomId)) {
    return res.status(400).json({
      isSucces: false,
      message: 'invalid object id',
    });
  }

  room.remove();

  res.status(200).json({
    isStatus: true,
    data: {},
    message: 'all data deleted',
  });
});
