import { Router } from 'express';
import { joinRoomController, leaveRoomController, sendMessageController } from '../controllers/chat.controller';

const router = Router();

router.post('/join', joinRoomController);
router.post('/leave', leaveRoomController);
router.post('/send', sendMessageController);

export default router;
