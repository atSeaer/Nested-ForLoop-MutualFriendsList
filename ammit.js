let bobsFollowers = ['Sam', 'Kat', 'tim', 'joe'];
let tinasFollowers = ['Sam', 'joe', 'jen'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
 for  (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] ===  tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}
console.log(mutualFollowers)