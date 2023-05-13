import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await Promise.all([
    prisma.user.create({
      data: {
        name: 'admin',
        role: 'ADMIN',
      },
    }),
    prisma.user.create({
      data: {
        name: 'test',
        role: 'USER',
      },
    }),
  ]);

  const result = await prisma.user.findMany({});
  console.log('users:', JSON.stringify(result));
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
