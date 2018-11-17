const { forwardTo } = require("prisma-binding");
//bc no permissions etc, just forward over direct to db
const Query = {
  items: forwardTo("db"),
  item: forwardTo("db")
  // async items(parent, args, ctx, info) {
  //   console.log("Getting Items");
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;

//return [{ name: "Snickers" }, { name: "Sunny" }];

// dogs(parent, args, ctx, info) {
//   global.dogs = global.dogs || [];
//   return global.dogs;
// }
