const { Brand } = require('../models/models');

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = Brand.create({ name });
    return res.json(brand);
  }

  async getAll(req, res) {
    const brands = Brand.findAll();
    return res.json(brands);
  }
}

module.exports = new BrandController();
