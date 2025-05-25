import { Thought, User } from '../models/index.js';

export const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getSingleThought = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) return res.status(404).json({ message: 'No thought found' });
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const createThought = async (req, res) => {
  try {
    const thought = await Thought.create(req.body);
    await User.findByIdAndUpdate(req.body.userId, {
      $push: { thoughts: thought._id }
    });
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const updateThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
    if (!thought) return res.status(404).json({ message: 'No thought found' });
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const deleteThought = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) return res.status(404).json({ message: 'No thought found' });
    res.json({ message: 'Thought deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
};

export const addReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true }
    );
    if (!thought) return res.status(404).json({ message: 'No thought found' });
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const removeReaction = async (req, res) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { new: true }
    );
    if (!thought) return res.status(404).json({ message: 'No thought found' });
    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};
