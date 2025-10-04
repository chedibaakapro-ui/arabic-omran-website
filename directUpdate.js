const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'prisma', 'dev.db');
const db = new sqlite3.Database(dbPath);

const newImages = [
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1542361345-89e58247f2d5?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
];

db.all("SELECT id FROM News ORDER BY createdAt", (err, rows) => {
  if (err) {
    console.error(err);
    return;
  }
  
  rows.forEach((row, index) => {
    const newImage = newImages[index % newImages.length];
    db.run("UPDATE News SET image = ? WHERE id = ?", [newImage, row.id], (err) => {
      if (err) console.error(err);
      else console.log(`Updated news ${row.id}`);
    });
  });
  
  db.close();
});