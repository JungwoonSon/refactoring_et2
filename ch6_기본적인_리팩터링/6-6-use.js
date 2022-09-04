import { getDefaultOwner } from './6-6.js';

const owner = getDefaultOwner();
owner.firstName = 'hong';
console.log(owner);
console.log(getDefaultOwner());
