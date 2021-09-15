import Item from "../models/Item.js";

/**
 * @route   GET api/items
 * @desc    Get All Items
 * @access  Public
 */

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    if (!items) throw Error("No items");

    res.status(200).json(items);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};

/**
 * @route   POST api/items
 * @desc    Create An Item
 * @access  Private
 */

export const postItem = async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
  });

  try {
    const item = await newItem.save();
    if (!item) throw Error("Something went wrong saving the item");

    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
};

/**
 * @route   UPDATE api/items/:id
 * @desc    UPDATE A Item
 * @access  Private
 */

export const updateItem = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const item = await Item.findById(_id);
    const wholeItem = req.body;
    if (!item) throw Error("No item found");
    const updatedItem = await Item.findByIdAndUpdate(
      _id,
      { ...wholeItem, _id },
      { new: true }
    );
    if (!updatedItem)
      throw Error("Something went wrong while trying to update the item");

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
};

/**
 * @route   DELETE api/items/:id
 * @desc    Delete A Item
 * @access  Private
 */

export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) throw Error("No item found");

    const removed = await item.remove();
    if (!removed)
      throw Error("Something went wrong while trying to delete the item");

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
};
