
//how to write immutable logic.

//this is not pure function; impure function
// function updateProfile(profile,city) {
//     //mutate the city;
//     profile.city = city;
//     return profile;
// }

// //pure version
// function updateProfile(profile,city) {
//      //return new profile object
//     return  {
//       id:profile.id,
//       name:profile.name,
//       city:city
//     };
// }

// //pure version :code refactoring
// function updateProfile(profile, city) {
//     //return new profile object
//     //return Object.assign({}, profile, { city: city })
//     return Object.assign({}, profile, { city })
// }
//pure version :code refactoring using es 7 spread operator
function updateProfile(profile, city) {
    //return new profile object
    //return Object.assign({}, profile, { city: city })
    return { ...profile, city };
}


let profile = { id: 1, name: 'subramaian', city: 'chennai' };

Object.freeze(profile);
console.log(profile);
let updatedProfile = updateProfile(profile, 'coimbatore');
console.log(updatedProfile);
