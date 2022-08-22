import type { PrismaClient, Nationality } from '@prisma/client';

type ResolverParent = unknown;
type ResolverContext = { prisma: PrismaClient };

export async function findAll(
    parent: ResolverParent,
    args: {},
    { prisma }: ResolverContext
): Promise<Nationality[]> {
    return prisma.nationality.findMany();
}