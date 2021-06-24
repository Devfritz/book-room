import mongoose from 'mongoose';

// const { Schema } = mongoose;

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: [50, 'name  not most than 8 characters'],
      required: [true, 'Please enter a name'],
    },
    pricePerNight: {
      type: Number,
      maxLength: [4, 'take 4 numbers'],
      default: 0.0,
    },
    description: {
      type: String,
      required: [true, 'Please enter a description for the room'],
    },
    address: {
      type: String,
      required: [true, 'Please enter a room address'],
    },
    guestCapacity: {
      type: Number,
      required: [true, 'Please enter a guest room capacity'],
    },
    numOfBeds: {
      type: Number,
      required: [true, 'Please enter number of beds'],
    },
    wifi: {
      type: Boolean,
      default: false,
    },
    breakfast: {
      type: Boolean,
      default: false,
    },
    airConditioned: {
      type: Boolean,
      default: false,
    },
    petsAllowed: {
      type: Boolean,
      default: false,
    },
    roomCleaning: {
      type: Boolean,
      default: false,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, 'Please enter room category'],
      enum: {
        values: ['King', 'Single', 'Twins'],
        message: 'Please select correct category for room',
      },
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: 'User',
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: false,
    },
  },
  { timestamp: true }
);

export default mongoose.models.Room || mongoose.model('Room', roomSchema);
