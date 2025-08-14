const db = require('../config/db');

const Product = {
  getAll: (callback) => {
    db.query('SELECT * FROM products WHERE is_deleted = FALSE', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM products WHERE id = ?', [id], callback);
  },

  searchByKeyword: (keyword, callback) => {
    db.query('SELECT * FROM products WHERE name LIKE ?', [`%${keyword}%`], callback);
  },

  create: (data, callback) => {
    const { name, price, discount, review_count, image_url } = data;
    db.query(
      `INSERT INTO products (name, price, discount, review_count, image_url, is_deleted) 
       VALUES (?, ?, ?, ?, ?, FALSE)`,
      [name, price, discount, review_count, image_url],
      callback
    );
  },

  update: (id, data, callback) => {
    const { name, price, discount, review_count, image_url } = data;
    db.query(
      'UPDATE products SET name = ?, price = ?, discount = ?, review_count = ?, image_url = ? WHERE id = ?',
      [name, price, discount, review_count, image_url, id],
      callback
    );
  },

  softDelete: (id, callback) => {
    db.query('UPDATE products SET is_deleted = TRUE WHERE id = ?', [id], callback);
  },

  restore: (id, callback) => {
    db.query('UPDATE products SET is_deleted = FALSE WHERE id = ?', [id], callback);
  },

  getDeleted: (callback) => {
    db.query('SELECT * FROM products WHERE is_deleted = TRUE', callback);
  }
};

module.exports = Product;
