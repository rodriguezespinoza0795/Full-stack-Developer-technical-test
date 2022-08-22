import type { PrismaClient, MaritalStatus } from '@prisma/client';

type ResolverParent = unknown;
type ResolverContext = { prisma: PrismaClient };

export async function findAll(
    parent: ResolverParent,
    args: {},
    { prisma }: ResolverContext
): Promise<MaritalStatus[]> {
    return prisma.maritalStatus.findMany();
}