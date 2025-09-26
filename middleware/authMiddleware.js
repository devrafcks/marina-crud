const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  const token = req.cookies.token; 
  if (!token) return res.redirect('/login');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'segredo123');
    req.user = decoded; 
    next();
  } catch (err) {
    console.log('JWT inválido:', err.message);
    return res.redirect('/login');
  }
};
