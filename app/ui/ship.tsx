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
    return ships;
}


export default async function Ship() {
    const ships = await getData();
    console.log({ ships })
    return (
        <div>
            <h1>Ship</h1>
            {
                ships.map((ship) => {
                    return (
                        <div key={ship.id}>
                            <p>{ship.model}</p>
                            <p>{ship.status.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}