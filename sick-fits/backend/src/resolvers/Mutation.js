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
