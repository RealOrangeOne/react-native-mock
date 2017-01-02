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
    const HasteMap = require(MAP_LOCATION);
    expect(HasteMap).to.have.all.keys('hasteMap', 'version');
    expect(HasteMap.hasteMap).to.be.an('object');
    expect(HasteMap.version).to.be.a('string');
  });

  describe('Haste Map Builder', function () {
    it('Should build the map', function () {
      fs.unlinkSync(MAP_LOCATION);
      require('../src/haste');
      const stat = fs.statSync(MAP_LOCATION);
      expect(stat.isFile()).to.be.true;
    });
  });

  describe('Modules', function () {
    const HasteMap = require(MAP_LOCATION).hasteMap;

    it('shouldnt import android version of ios components', function () {
      Object.keys(HasteMap).forEach(function (mod) {
        if (mod.match(/ios/gi)) {
          expect(HasteMap[mod].endsWith('.android.js')).to.be.false;
        }
      });
    });

    it('shouldnt import ios version of android components', function () {
      Object.keys(HasteMap).forEach(function (mod) {
        if (mod.match(/android/gi)) {
          expect(HasteMap[mod].endsWith('.ios.js')).to.be.false;
        }
      });
    });
  });
});
