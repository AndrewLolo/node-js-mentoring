import express from 'express';
import 'authentication';
import 'db';

import bodyParser from 'body-parser';
import cookieParser from 'middleware/cookie-parser';
import queryParser from 'middleware/query-parser';

import productsRoutes from 'routes/products-routes';
import citiesRoutes from 'routes/cities-routes';
import usersRoutes from 'routes/users-routes';
import authRoutes from 'routes/auth-routes';

const app = express();

app.use(cookieParser);
app.use(queryParser);
app.use(bodyParser.json());

app.use('/products', productsRoutes);
app.use('/cities', citiesRoutes);
app.use('/users', usersRoutes);
app.use('/auth', authRoutes);

app.get('*', (req, res) => res.end('Express server...'));

export default app;
