const app = require('./app');
const { port } = require('./config/config');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/gameApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect to MongoDB:', err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
