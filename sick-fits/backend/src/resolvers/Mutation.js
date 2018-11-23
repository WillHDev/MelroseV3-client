const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const mutations = {
  async createItem(parent, args, ctx, info) {
    //TODO: check if they are logged in
    //how we access the db couldve imported it
    //return ctx... promise instead of
    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );
    console.log(item);
    return item;
  },
  updateItem(parent, args, ctx, info) {
    //first take a copy of the updates
    //take a copy in order to be able to use the id for the return
    const updates = { ...args };
    //remove the ID from the updates
    delete updates.id;
    //runthe update method
    //ctx is request context, db is how we access our prisma db, mutation or query, from
    //there we have a
    //item ~ info to retrieve item
    return ctx.db.mutation.updateItem(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    //1. find the item
    const item = await ctx.db.query.item({ where }, `{id, title}`);
    //2. Check if they own that item
    //3. Delete item
    return ctx.db.mutation.deleteItem({ where }, info);
  },
  async signup(parent, args, ctx, info) {
    // lowercase their email
    args.email = args.email.toLowerCase();
    // hash their password
    const password = await bcrypt.hash(args.password, 10);
    // create the user in the database
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ["USER"] }
        }
      },
      info
    );
    // create the JWT token for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // We set the jwt as a cookie on the response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
    });
    // Finalllllly we return the user to the browser
    return user;
  }
};

module.exports = mutations;

//  title: args.title,

// createDog(parent, args, ctx, info) {
//   //create a dog!
//   global.dogs = global.dogs || [];
//   const newDog = { name: args.name };
//   global.dogs.push(newDog);
//   return newDog;
// }
