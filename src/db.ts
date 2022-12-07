import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

// We have created a file so that we can have one prisma client and we don't need to call it everywhere.
