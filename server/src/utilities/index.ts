require('dotenv').config()
import { Wallet } from 'ethers';
import * as faker from 'faker';
import { ProjectModel } from '../../../client/src/store/projects/types';
import { addProject, encodeFileContents } from '../express/routes/add';

const main = async (cnt: number) => {
    for (let i = 0; i < cnt; ++i) {
        const wallet: Wallet = Wallet.createRandom();


        const address: string = wallet.address;

        const project: ProjectModel = {
            location: `${faker.address.city()},${faker.address.country()}`,
            address: address,
            budget: + faker.commerce.price(10, 10000),
            category: faker.company.bsAdjective() + faker.company.bsNoun(),
            createdAt: Date.now(),
            imageURL: `https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/200/200`,
            name: faker.company.bsAdjective() + faker.company.bsNoun(),
        }

        console.log(project)

        await addProject(address, address, encodeFileContents(address, address, JSON.stringify(project)))
    }
}

main(10)