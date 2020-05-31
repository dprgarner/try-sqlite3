const fs = require('fs');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

const reportTime = require('./reportTime');

const fileName = './large.json';
const data = JSON.parse(fs.readFileSync(fileName, 'utf-8'));

function loadData(cb) {
  db.serialize(() => {
    db.run(`
  CREATE TABLE entries (
    id TEXT,
    description TEXT,
    color TEXT,
    department TEXT,
    productMaterial TEXT,
    startYear INTEGER,
    endYear INTEGER
  );
`);
    const insert = db.prepare(
      'INSERT INTO entries VALUES (?, ?, ?, ?, ?, ?, ?)',
    );
    data.forEach((row) => {
      insert.run([
        row.id,
        row.description,
        row.color,
        row.department,
        row.productMaterial,
        row.startYear,
        row.endYear,
      ]);
    });
    insert.finalize(cb);
  });
}

function queryData(done) {
  db.serialize(() => {
    db.each(
      `SELECT DISTINCT department
        FROM entries
        WHERE productMaterial="Steel" AND color="red"
        ORDER BY department ASC
      `,
      (err, row) => {
        if (err) {
          console.error(err);
        }
        console.log(row);
      },
      done,
    );
  });
}

reportTime(`Insert ${data.length} entries`, (done) => {
  loadData(() => {
    done();
    reportTime(`Query rows`, (done2) => {
      queryData((err) => {
        if (err) {
          console.error(err);
        }
        done2(err);
        db.close();
      });
    });
  });
});
