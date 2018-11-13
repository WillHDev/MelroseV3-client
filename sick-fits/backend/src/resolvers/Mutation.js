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
