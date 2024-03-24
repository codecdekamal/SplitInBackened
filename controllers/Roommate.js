const RoomMate = require("../Schema/Roommate.js");
const Properties = require("../Schema/Properties.js");
const getSingleRoommate = async (req, res) => {
  try {
    const { roommate_id } = req.params;
    console.log(roommate_id);
    const singleRoommate = await RoomMate.findById(roommate_id).populate(
      "property"
    );
    res.status(200).json({ singleRoommate });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
const createRoommate = async (req, res) => {
  try {
    const { property_id } = req.params;
    const CheckingPropertyRommate = await Properties.findById({
      _id: property_id,
    });
    console.log(CheckingPropertyRommate.roommates.length);
    if (CheckingPropertyRommate.roommates.length < 5) {
      const newRoommate = await RoomMate.create({
        ...req.body,
        property: property_id,
      });
      await Properties.findByIdAndUpdate(
        { _id: property_id },
        { $push: { roommates: newRoommate._id } },
        {}
      );
    } else {
      throw new Error("Room is full");
    }
    res.status(201).json({ msg: "Success" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
const updateRoommate = async (req, res) => {
  const { name, age, gender, eatingHabit } = req.body;

};
const deleteRoommate = async (req, res) => {
  try {
    const { roommate_id } = req.params;
    const roomateDetails = await RoomMate.findOne({ _id: roommate_id });
    const roommateId = roomateDetails.property.toString();
    await RoomMate.findByIdAndDelete({ _id: roommate_id });
    await Properties.findByIdAndUpdate(
      { _id: roommateId },
      { $pull: { roommates: roommate_id } }
    );
    res.status(201).json({ msg: "Success" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
const gettingAllRoommate = async (req, res) => {
  try {
    const allRoommate = await RoomMate.find({});
    //console.log(allRoommate)
    res.status(200).json({ allRoommate });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = {
  gettingAllRoommate,
  getSingleRoommate,
  createRoommate,
  updateRoommate,
  deleteRoommate,
};
