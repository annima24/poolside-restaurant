import { createMenuItem } from '../menu';

const menu = {
  eggs: [
    createMenuItem(`Two eggs any style`, `add ham bacon or sausage 5.25`, 4.25),
    createMenuItem(
      `Eggs and hash`,
      `2 eggs served any style over house made corned beef hash`,
      725,
    ),
  ],
  omlettes: [
      createMenuItem(`Cheese`, `your choice of american swiss or cheddar`, 4.50),
      createMenuItem(`Ham and cheddar`, `diced ham and cheddar`, 5.25),
      createMenuItem(`Western`, `ham, green peppers, and onion`, 5.25),
      createMenuItem(`Vegetarian`, `tomato, onion, green pepper, and mushroom`, 5.00)
  ],
  sweeterSide: [
      createMenuItem(`3 Buttermilk pancakes or french toast`, `add ham, bacon, or sausage 6.75`, 6.00),
      createMenuItem(`2 Buttermilk pancakes or french toast`, `add ham, bacon, or sausage 5.75`, 5.00),
      createMenuItem(`Belgian waffle`, `add ham, bacon, or sausage 7.75`, 7.00)

  ], 
  sides: [
      createMenuItem(`Bagel`, ``, 2.00),
      createMenuItem(`Toast`, ``,1.25 ),
      createMenuItem(`House made English muffin`, ``, 1.50),
      createMenuItem(`House made muffin`, ``,2.25 ),
      createMenuItem(`Homefries`, ``,2.25 ),
      createMenuItem(`Ham, bacon, or sausage`, ``,1.00 ),
      createMenuItem(`Corned beef hash`, ``,3.00 ),
      createMenuItem(`Single pancake or slice of french toast`, ``,2.50 ),
  ],
  cereal: [
      createMenuItem(`Oatmeal`, ``, 2.50),
      createMenuItem(`Cold cereal`, ``, 1.75)
  ]
};

export default menu;
