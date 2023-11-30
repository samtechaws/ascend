import prisma from '../lib/prisma'

async function getData() {

    const ships = await prisma.ship.findMany({
        where: {
            isactive: true
        }, include: {
            status: {
                select: {
                    name: true
                }
            }
        }
    })
    await prisma.$disconnect()
    return ships;
}


export default async function Ship() {

    const ships = await getData();
    return (
        <div>
            <h1>Ship</h1>
            {
                ships.map((ship) => {
                    return (
                        <div key={ship.id}>
                            <p>{ship.serno}</p>
                            <p>{ship.status.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}