const prisma = require("./src/config/prisma");

async function main() {
  console.log(Object.keys(prisma));

  const notes = await prisma.notes.findMany();

  console.log(notes);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });