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
        },
        cacheStrategy: { ttl: 0 }
    })

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