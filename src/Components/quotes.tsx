// old - in JS
// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// async function createChefQuote(chefName, quote) {
//   const newQuote = await prisma.chefQuote.create({
//     data: {
//       chefName: chefName,
//       quote: quote,
//     },
//   });
//   return newQuote;
// }

// // Example usage
// createChefQuote('Gordon Ramsay', 'This risotto is absolutely delicious!')
//   .then((quote) => console.log('New chef quote created:', quote))
//   .catch((error) => console.error('Error creating chef quote:', error))
//   .finally(() => prisma.$disconnect());

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createChefQuote(chefName: string, quote: string) {
  const newQuote = await prisma.chefQuote.create({
    data: {
      chefName: chefName,
      quote: quote,
    },
  });
  return newQuote;
}

// Example usage
createChefQuote('Gordon Ramsay', 'This risotto is absolutely delicious!')
  .then((quote) => console.log('New chef quote created:', quote))
  .catch((error) => console.error('Error creating chef quote:', error))
  .finally(() => prisma.$disconnect());