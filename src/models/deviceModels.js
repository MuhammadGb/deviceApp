const mongoose = require("mongoose");

const DeviceSchema = mongoose.Schema(
  {
    ipAddress: {
      type: String,
      required: true,
      unique: true,
    },
    geoLocation: {
      type: String,
      required: true,
      unique: true,
    },
    macAddress: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("device", DeviceSchema);
