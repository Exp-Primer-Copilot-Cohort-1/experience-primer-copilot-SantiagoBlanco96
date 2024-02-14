// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```

### 3.2.2. Run the server
```bash
node coments.js
```

### 3.2.3. Open the browser
- Open the browser and type `http://localhost:3000` in the address bar, and then press Enter.
- The browser displays `Hello World!`.

## 3.3. Create a route with parameters
### 3.3.1. Create a route with parameters
```javascript
// Path: coments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route with parameters
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```

### 3.3.2. Run the server
```bash
node coments.js
```

### 3.3.3. Open the browser
- Open the browser and type `http://localhost:3000/user/123` in the address bar, and then press Enter.
- The browser displays `User ID: 123`.

## 3.4. Create a route with query parameters
### 3.4.1. Create a route with query parameters
```javascript
// Path: coments.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route with query parameters
app.get('/user', (req, res) => {
    res.send(`User ID: ${req.query.id}`);
});

// Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
```

### 3.4.2. Run the server
```bash
node coments.js
```

### 3.4.3. Open the browser
- Open the browser and type `http://localhost: