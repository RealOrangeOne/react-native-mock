import React from 'react';

class CardStackPanResponder {
}

class PagerPanResponder {
}

class NavigationCard extends React.Component {
}

NavigationCard.CardStackPanResponder = CardStackPanResponder;
NavigationCard.CardStackStyleInterpolator = {
  forHorizontal: () => ({}),
  forVertical: () => ({}),
};
NavigationCard.PagerPanResponder = PagerPanResponder;
NavigationCard.PagerStyleInterpolator = {
  forHorizontal: () => ({}),
};

module.exports = NavigationCard;
