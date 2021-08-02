import express from 'express';


const router = express.Router();

router.put('/productos/actualizar/:id', (req, res) => {
  res.json({
    title:'Nuevo Producto',
    price:'123',
    thumbnail: 'url'
  });
});

router.delete('/productos/borrar/:id', (req, res) => {
 
  res.json({
    msg:'Usuario Eliminado',
    title: 'Producto Eliminado',
    price:'123',
    thumbnail: 'url'

  });
});

export default router;