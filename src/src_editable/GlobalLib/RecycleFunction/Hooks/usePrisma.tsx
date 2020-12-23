import { PrismaClient } from '@prisma/client';

const usePrisma = () => {
  return new PrismaClient();
};

export default usePrisma;
