import express from 'express';

import bodyParser from 'body-parser';
import cookieParser from 'middleware/cookie-parser';
import queryParser from 'middleware/query-parser';

import productsRoutes from 'routes/products-routes';

const app = express();

app.use(cookieParser);
app.use(queryParser);
app.use(bodyParser.json());

app.use('/products', productsRoutes);

app.get('*', (req, res) => {
    res.end('Express server...');
})
export default app;