/*
  Thanks to @zhaotai and @miracle2k for this!
  https://github.com/RealOrangeOne/react-native-mock/issues/11#issuecomment-230435835s
*/

const m = require('module');

const originalLoader = m._load;

m._load = function hookedLoader(request, parent, isMain) {
  if (request.match(/.jpeg|.jpg|.png$/)) {
    return { uri: request };
  }

  return originalLoader(request, parent, isMain);
};
