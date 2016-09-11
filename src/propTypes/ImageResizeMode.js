import Platfrom from '../plugins/Platform';

const resizePropTypes = [
  'contain',
  'cover',
  'stretch',
];

if (Platfrom.OS === 'ios') {
  resizePropTypes.push('repeat', 'center');
}

module.exports = resizePropTypes;
