import type { PrismaClient, State } from '@prisma/client';

type ResolverParent = unknown;
type ResolverContext = { prisma: PrismaClient };

export async function findAll(
    parent: ResolverParent,
    args: {},
    { prisma }: ResolverContext
): Promise<State[]> {
    return prisma.state.findMany();
}