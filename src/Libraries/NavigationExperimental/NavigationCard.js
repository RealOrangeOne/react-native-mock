import React from 'react';

class CardStackPanResponder {
}

class PagerPanResponder {
}

class NavigationCard extends React.Component {
  static CardStackPanResponder = CardStackPanResponder;
  static CardStackStyleInterpolator = {
    forHorizontal: () => ({}),
    forVertical: () => ({}),
  };
  static PagerPanResponder = PagerPanResponder;
  static PagerStyleInterpolator = {
    forHorizontal: () => ({}),
  };
}

module.exports = NavigationCard;
