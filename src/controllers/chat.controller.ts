import { Request, Response } from 'express';

export const joinRoomController = (req: Request, res: Response): void => {
    const { room, userId } = req.body;
    if (!room || !userId) {
        res.status(400).json({ error: 'Room and userId are required' });
        return;
    }
    
    const io = req.app.get('io');
  const socket = io.sockets.sockets.get(userId);
  console.log(socket)
  if (socket) {
    socket.join(room);
    res.status(200).json({ message: `User ${userId} joined room ${room}` });
  } else {
    res.status(404).json({ error: 'User socket not found' });
  }
};

export const leaveRoomController = (req: Request, res: Response): void => {
  const { room, userId } = req.body;
  if (!room || !userId) {
    res.status(400).json({ error: 'Room and userId are required' });
    return;
  }

  const io = req.app.get('io');
  const socket = io.sockets.sockets.get(userId);
  if (socket) {
    socket.leave(room);
    res.status(200).json({ message: `User ${userId} left room ${room}` });
  } else {
    res.status(404).json({ error: 'User socket not found' });
  }
};

export const sendMessageController = (req: Request, res: Response): void => {
  const { room, message, userId } = req.body;
  if (!room || !message || !userId) {
    res.status(400).json({ error: 'Room, message, and userId are required' });
    return;
  }

  const io = req.app.get('io');
  const socket = io.sockets.sockets.get(userId);
  if (socket) {
    io.to(room).emit('message', { userId, message });
    res.status(200).json({ message: `Message sent to room ${room}` });
  } else {
    res.status(404).json({ error: 'User socket not found' });
  }
};
