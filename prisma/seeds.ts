import { leftMenu } from './data/sideMenu'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main =  async () : Promise<void> => {
  try {
    // await prisma.sideMenu.createMany({
    //     data: leftMenu
    // })
  }catch(e){
    console.log(e)
  }
}

main ()