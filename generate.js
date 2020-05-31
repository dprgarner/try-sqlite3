const fs = require('fs');
const Chance = require('chance');
const faker = require('faker');

const chance = new Chance();

function create(n, fileName) {
  const data = [];
  for (let i = 0; i < n; i++) {
    const startYear = chance.natural({ min: 1970, max: 2020 });
    const endYear = startYear + chance.natural({ min: 0, max: 20 });
    data.push({
      id: chance.hash({ length: 8 }),
      description: faker.lorem.words(),
      color: faker.commerce.color(),
      department: faker.commerce.department(),
      productMaterial: faker.commerce.productMaterial(),
      startYear,
      endYear,
    });
  }
  fs.writeFileSync(fileName, JSON.stringify(data));
  console.log(`Created ${fileName} with ${n} entries`);
}

create(100, './small.json');
create(65000, './large.json');
