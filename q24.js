const users = [
  {
    name: "Ana",
    orders: [
      {
        id: "o1",
        items: [
          { name: "Pen", price: 2 },
          { name: "Mug", price: 8 }
        ]
      }
    ]
  },
  {
    name: "Ben",
    orders: [
      {
        id: "o2",
        items: [
          { name: "Bag", price: 15 }
        ]
      },
      {
        id: "o3",
        items: []
      }
    ]
  }
];

function normalize(users) {
  return users.flatMap(user =>
    user.orders.flatMap(order =>
      order.items.map(item => ({
        userName: user.name,
        orderId: order.id,
        itemName: item.name,
        itemPrice: item.price
      }))
    )
  );
}

console.log(normalize(users));