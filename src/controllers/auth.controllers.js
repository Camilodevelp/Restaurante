import modelo from "../models/platos.models.js";

export const obtenerPlatos = async (req, res) => {
    try {
        const plato = await modelo.find({});
       // console.log(plato)
        return res.json({ plato });

      } catch (error) {
        console.log('Error', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
  
};

export const insertPlato = async (req, res) => {
    const { id, nameProduct, img, price, desc, quantity } = req.body;
  
    try {
      const newPlato = new modelo({
        id,
        nameProduct,
        img,
        price,
        desc,
        quantity,
      });
  
      const plato = await newPlato.save();
      console.log(JSON.stringify(plato))
      res.json(plato);
    } catch (error) {
      console.log("error");
    }
    
  };

