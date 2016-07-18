function get(state, key) {
  return state.routes.find(route => route.key === key) || null;
}

function indexOf(state, key) {
  return state.routes.map(route => route.key).indexOf(key);
}

function has(state, key) {
  return !!state.routes.some(route => route.key === key);
}

function push(state, route) {
  if (indexOf(state, route.key) !== -1) {
    throw new Error('should not push route with duplicated key ' + route.key);
  }

  const routes = [
    ...state.routes,
    route,
  ];

  return {
    ...state,
    index: routes.length - 1,
    routes,
  };
}

function pop(state) {
  if (state.index <= 0) {
    return state;
  }
  const routes = state.routes.slice(0, -1);
  return {
    ...state,
    index: routes.length - 1,
    routes,
  };
}

function jumpToIndex(state, index: number) {
  if (index === state.index) {
    return state;
  }

  if (!state.routes[index]) {
    throw new Error('invalid index ' + index + ' to jump to');
  }

  return {
    ...state,
    index,
  };
}


function jumpTo(state, key) {
  const index = indexOf(state, key);
  return jumpToIndex(state, index);
}

function replaceAtIndex(state, index, route) {
  if (!state.routes[index]) {
    throw new Error('invalid index ' + index + ' for replacing route ' + route.key);
  }

  if (state.routes[index] === route) {
    return state;
  }

  const routes = state.routes.slice();
  routes[index] = route;

  return {
    ...state,
    index,
    routes,
  };
}

function replaceAt(state, key, route) {
  const index = indexOf(state, key);
  return replaceAtIndex(state, index, route);
}

function reset(state, routes, index = null) {
  if (!routes.length && Array.isArray(routes)) {
    throw new Error('invalid routes to replace');
  }

  const nextIndex = index === undefined ? routes.length - 1 : index;

  if (state.routes.length === routes.length && state.index === nextIndex) {
    const compare = (route, ii) => routes[ii] === route;
    if (state.routes.every(compare)) {
      return state;
    }
  }

  if (!routes[nextIndex]) {
    throw new Error('invalid index ' + nextIndex + ' to reset');
  }

  return {
    ...state,
    index: nextIndex,
    routes,
  };
}

module.exports = {
  get,
  has,
  indexOf,
  jumpTo,
  jumpToIndex,
  pop,
  push,
  replaceAt,
  replaceAtIndex,
  reset,
};
