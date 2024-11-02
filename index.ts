import Express from 'express';
import {config} from 'dotenv';
import bootstrapRoute from './src/routes';

config();
const PORT = process.env.PORT;

const app = Express();
app.use('/', bootstrapRoute);

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});

