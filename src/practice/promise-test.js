/* PROMISE RESOLVE REJECT

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if(dogWalked)
                resolve("you walked the dog")
            else
                reject("you didn't walk the dog")
        }, 1500)
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true

            if(kitchenCleaned)
                resolve('you cleaned the kitchen')
            else
                reject("you didn't cleaned the kitchen")
        }, 2500)
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false

            if(trashTakenOut)
                resolve('you take out the trash')
            else
                reject("you didn't take out the trash")
        }, 500)
    })
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("you finished the chores")})
         .catch(error => console.error(error))

*/


//PROMISE WITH ASYNC AWAIT

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;

            if(dogWalked)
                resolve("you walked the dog")
            else
                reject("you didn't walk the dog")
        }, 1500)
    })
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true

            if(kitchenCleaned)
                resolve('you cleaned the kitchen')
            else
                reject("you didn't cleaned the kitchen")
        }, 2500)
    })
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashTakenOut = false

            if(trashTakenOut)
                resolve('you take out the trash')
            else
                reject("you didn't take out the trash")
        }, 500)
    })
}

async function doChores() {
        try {
            const walkDogResult = await walkDog()
            console.log(walkDogResult)
    
            const cleanKitchenResult = await cleanKitchen()
            console.log(cleanKitchenResult)
    
            const takeOutTrashResult = await takeOutTrash()
            console.log(takeOutTrashResult)
    
            console.log('you finished the chores')
        }
        catch(error) {
            console.error(error)
        }
}

doChores()