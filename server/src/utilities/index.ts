require('dotenv').config()
import ethers, { Wallet } from 'ethers';
import * as faker from 'faker';
import { ProjectModel } from '../../../client/src/store/projects/types';
import { addProjectRoute, encodeFileContents } from '../express/routes/add';

const main = async (cnt: number) => {
    for (let i = 0; i < cnt; ++i) {
        const wallet: Wallet = Wallet.createRandom();

        const project: ProjectModel = {
            location: `${faker.address.city()},${faker.address.country()}`,
            budget: +faker.commerce.price(10, 10000),
            category: faker.company.bsAdjective() + faker.company.bsNoun(),
            createdAt: Date.now(),
            imageURL: faker.image.imageUrl(400, 400),
            name: faker.company.bsAdjective() + faker.company.bsNoun(),
        }

        const address: string = wallet.address;

        await addProjectRoute(address, address, encodeFileContents(address, address, JSON.stringify(project)))
    }
}

main(10)