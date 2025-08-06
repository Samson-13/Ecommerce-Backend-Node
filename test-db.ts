import prisma from "./src/lib/prisma";

async function main() {
  const categories = await prisma.category.findMany();
  console.log("Connected successfully. Categories:");
  console.log(categories);
}

main()
  .catch((e) => {
    console.error("❌ Connection failed:", e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
