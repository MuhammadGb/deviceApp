//const DeviceDetails = require("../models/deviceModels");

// Create and Save a new DeviceDetails
const create = async (req, res, next) => {
  try {
    const { ipAddress, geoLocation, macAddress } = req.body;

    if (!ipAddress || !geoLocation || !macAddress) {
      throw new Error(
        "Device details required: ipAddress, geoLocation, macAddress"
      );
    }

    const newDeviceDetails = {
      ipAddress,
      geoLocation,
      macAddress,
    };

    //const addDeviceDetails = new DeviceDetails(newDeviceDetails);
    //addDeviceDetails.save();
    res.status(201).json({ message: "Success", data: newDeviceDetails });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
};
