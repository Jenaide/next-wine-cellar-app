"use server";

import prisma from '../../../lib/prisma';
import bcrypt from 'bcryptjs';

export const signUp = async (email: string, password: string) => {
    const existingUser = await prisma.user.findUnique({
        where: {
            email,
        }
    });

    if (existingUser) {
        return `${existingUser.email} already exists`
    }

    const passwordHash = bcrypt.hashSync(password, 10);

    await prisma.user.create({
        data: {
            email,
            password: passwordHash,
        },
    });

    return 'Successfully created a new user';
};