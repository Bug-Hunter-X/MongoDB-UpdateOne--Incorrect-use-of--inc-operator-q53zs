```javascript
const query = { name: 'John Doe' };

// Incorrect usage of $inc operator
db.collection('users').updateOne(query, { $inc: name: 1 });
```