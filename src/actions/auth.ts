"use server"

import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const onAuthenticatedUser = async () => {
    try {
        const clerk = await currentUser()
        if (!clerk) return {status: 401, message: "Unauthorized - User not authenticated"}
        
        const user = await client.user.findUnique({
            where: {
                clerkId: clerk.id
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
            }
        })

        if (user) 
            return {status: 200, 
                id: user.id,
                image: clerk.imageUrl,
                username: `${user.firstName} ${user.lastName}`,
            }
            return {
                status:404
            }
    } catch (error) {
        console.log(error)
        return {status: 500, message: "Internal server error"}
    }
}