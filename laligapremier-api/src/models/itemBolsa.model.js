import mongoose from 'mongoose';

const itemBolsaSchema = new mongoose.Schema(
  {
    usuarioId: {
      type: String,
      required: true,
    },
    camisetaId: {
      type: String,
      required: true,
    },
    camisetaBolsa: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const ItemBolsaModel = mongoose.model('ItemBolsa', itemBolsaSchema, 'items_bolsa');

export default ItemBolsaModel;