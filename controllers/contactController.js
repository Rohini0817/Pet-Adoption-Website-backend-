import Contact from "../models/Contact.js";

export const submitContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newMessage = await Contact.create({ name, email, message });
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ message: "Failed to submit message" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ message: "Error fetching messages" });
  }
};
