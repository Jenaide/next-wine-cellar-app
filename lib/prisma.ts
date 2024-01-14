import { PrismaClient } from '@prisma/client';


// declaring prisma in the global namespace, 
// you provide TypeScript with the necessary information 
// about the structure of the global object.
declare global {
    var prisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;