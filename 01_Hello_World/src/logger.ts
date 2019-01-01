import { Request, Response, NextFunction } from 'express';

export let logger = (req: Request, res: Response, next: NextFunction) => {
  const ipaddress = req.headers['x-forworded-for'] ||
    req.connection.remoteAddress ||
    (req.socket && req.socket.remoteAddress) ||
    // (req.connection.socket && req.connection.socket.remoteAddress) ||
    '0.0.0.0';
  const date = (new Date()).toISOString();
  const method = req.method;
  const url = req.url;
  const ua = req.headers['user-agent'];

  console.log(`${ipaddress} [${date}] "${method} ${url}" - ${ua}`);

  return next(ipaddress);
};
