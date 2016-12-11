import { expect } from 'chai';
import fs from 'fs';
import path from 'path';

const MAP_LOCATION = path.join(__dirname, '../haste-map.json');

describe('Haste Map', function () {
  it('Should have one initially', function () {
    const stat = fs.statSync(MAP_LOCATION);
    expect(stat.isFile()).to.be.true;
  });

  it('should contain correct data', function () {
    const HasteMap = require('../haste-map');
    expect(HasteMap).to.have.all.keys('hasteMap', 'version');
    expect(HasteMap.hasteMap).to.be.an('object');
    expect(HasteMap.version).to.be.a('string');
  });
});
