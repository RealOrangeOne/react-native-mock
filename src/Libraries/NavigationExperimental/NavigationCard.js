class CardStackPanResponder {
}

class PagerPanResponder {
}

const NavigationCard = (props) => null;

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
