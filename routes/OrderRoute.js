import express from "express";
import { 
    getOrders, 
    getOrderById, 
    createOrder,
    updateOrder,
    deleteOrder
} from "../controllers/OrderController.js"
// KETIKA MAU IMPORT PATH SEBAIKNYA KITA TAMBAHKAN EKSTENSI DI FILE YANG DI IMPORT
// CONTOH JIKA KITA MENG IMPORT PATH SEPERTI from "../controllers/OrderController" TANPA EKSTENSI .js
// MAKA NODE JS AKAN MENGANGGAP BAHWA TIDAK ADA FILE DI DIREKTORI CONTROLLERS
// JADI DI BIASAKAN PAKAI EKSTENSI FILENYA BIAR TIDAK ADA MASALAH LAGI!!!!!!!!!!

const router = express.Router();

router.get('/tbl_order', getOrders);
router.get('/tbl_order/:id', getOrderById);
router.post('/tbl_order', createOrder);
router.patch('/tbl_order/:id', updateOrder);
router.delete('/tbl_order/:id', deleteOrder);
export default router;