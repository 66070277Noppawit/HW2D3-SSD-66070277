const Product = require('../models/productModel');

exports.getAll = (req, res) => {
  Product.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.getById = (req, res) => {
  Product.getById(req.params.id, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Not found' });
    res.json(results[0]);
  });
};

exports.search = (req, res) => {
  Product.searchByKeyword(req.params.keyword, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

exports.create = (req, res) => {
  Product.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};

exports.update = (req, res) => {
  Product.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Product updated' });
  });
};

exports.softDelete = (req, res) => {
  Product.softDelete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Product soft deleted' });
  });
};

exports.restore = (req, res) => {
  Product.restore(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Product restored' });
  });
};

exports.getDeleted = (req, res) => {
  Product.getDeleted((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};
