import { Server as SocketIOServer, Socket } from 'socket.io';

export const initializeChat = (io: SocketIOServer): void => {
  io.on('connection', (socket: Socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('joinRoom', (room: string) => {
      socket.join(room);
      console.log(`User ${socket.id} joined room: ${room}`);
    });

    socket.on('leaveRoom', (room: string) => {
      socket.leave(room);
      console.log(`User ${socket.id} left room: ${room}`);
    });

    socket.on('chatMessage', ({ room, message }) => {
      console.log(`Message from ${socket.id} to room ${room}: ${message}`);
      io.to(room).emit('message', { userId: socket.id, message });
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};
