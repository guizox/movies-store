const util = require('util');

const setTimeoutPromise = util.promisify(setTimeout);

/* Didn't find how to implement delay to middleware
  request and didn't want to lose time doing something better
*/

module.exports = (req, res, next) => {
  setTimeoutPromise(4000).then(() => {
    if (req.method === 'POST' && req.path === '/security/login') {
      if (req.body.username === 'victor' && req.body.password === '123456') {
        res.status(200).json({
          authorized: true,
          name: 'Victor PEreira Feitosa',
          token: 'ABCSWRWQEEQEWQEWQEDC ASQWIJEIJOQWJIEQ',
        });
      } else {
        res.status(401).json({
          message: `[${req.body.username}] NÃO ENCONTRADO`,
          details:
            'Verifique se o código de identificação do usuário informado está correto e se o mesmo se encontra cadastrado',
        });
      }
    } else {
      next();
    }
  });
};
