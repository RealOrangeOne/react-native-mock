import createMockComponent from '../../components/createMockComponent';

class CardStackPanResponder {
}

class PagerPanResponder {
}

const NavigationCard = createMockComponent('NavigationCard');

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
