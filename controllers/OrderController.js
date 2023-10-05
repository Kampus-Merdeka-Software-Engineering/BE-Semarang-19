import Order from "../models/M_Order.js";

export const getOrders = async(req, res)=>{
    try {
        const response = await Order.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};
export const getOrderById = async(req, res)=>{
    try {
        const response = await Order.findOne({
            where:{
                id : req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
};
export const createOrder = async(req, res)=>{
    try {
        console.log("Data yang akan disimpan ke database:", req.body);
    
        const newOrder = await Order.create({
          namaPenerima: req.body.namaPenerima,
          alamatPengirim: req.body.alamatPengirim,
          nomerTelpon: req.body.nomerTelpon,
          jenisLayanan: req.body.jenisLayanan,
          namaKurir: req.body.namaKurir,
          nomerTelponKurir: req.body.nomerTelponKurir,
        });

        console.log(newOrder.toString());
    
        if (newOrder) {
          res.status(200).json({ msg: "Order Created" });
        } else {
          res.status(500).json({ error: "Gagal membuat pesanan" });
        }
      } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Terjadi kesalahan saat menyimpan pesanan" });
      }
    };
export const updateOrder = async(req, res)=>{
    try {
        await Order.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Order Updated"});
    } catch (error) {
        console.log(error.message);
    }
};
export const deleteOrder = async(req, res)=>{
    try {
        await Order.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg : "Order Deleted"});
    } catch (error) {
        console.log(error.message);
    }
};