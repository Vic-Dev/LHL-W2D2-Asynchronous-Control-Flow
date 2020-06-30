/*
 * Functions
 */

function logName(name) {
  console.log('Your name is:', name);
}

// logName('Victoria');

const logCatsName = (name) => console.log('Your cat\'s name is:', name);

// logCatsName('Wiley');

/*
 * Callbacks
 */

function generateProfile(user, logName, logCatsName) {
  console.log('Here is your profile:');
  logName(user.name);
  logCatsName(user.cat);
}

const user = {
  name: 'Victoria',
  cat: 'Wiley'
};

generateProfile(user, logName, logCatsName);

const evilUser = {
  name: 'Voldemort',
  cat: null
};

const logEvilName = (name) => console.log(`Your name is ${name}. You are very evil.`);
const logEvilCatName = (name) => console.log(`Your name is ${name}. You are very evil.`);

generateProfile(evilUser, logEvilName, logEvilCatName);
