import type { PrismaClient, formAnswer } from '@prisma/client';

type ResolverParent = unknown;
type ResolverContext = { prisma: PrismaClient };

export async function findAll(
    parent: ResolverParent,
    args: {},
    { prisma }: ResolverContext
): Promise<formAnswer[]> {
    return prisma.formAnswer.findMany();
}

type createFormAnswer = Omit<formAnswer, 'id' | 'createdAt'>;

export async function create(
    parent: ResolverParent,
    { data }: { data: createFormAnswer },
    { prisma }: ResolverContext
): Promise<formAnswer> {
    return prisma.formAnswer.create({ data: data });
}