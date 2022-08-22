import type { PrismaClient, Gender } from '@prisma/client';

type ResolverParent = unknown;
type ResolverContext = { prisma: PrismaClient };

export async function findAll(
    parent: ResolverParent,
    args: {},
    { prisma }: ResolverContext
): Promise<Gender[]> {
    return prisma.gender.findMany();
}