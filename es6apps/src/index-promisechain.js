
const getUser = () => {
    let user = { id: 1, name: 'ram' };
    //user=null;
    let err = {
        message: 'User not found'
    }
    if (user) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, user)
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, err)
        });
    }
};

const login = user => {
    let status = "Login success"
    let err = "Login failed"
    if (user.name === 'ram') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, status)
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, err)
        });
    }
}
//show page  based on login
const showPage = status => {
    if (status === 'login success') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, { message: 'You are registered user' });
        });
    } else {
        return new Promise((resolve, reject) => {
            setTimeout(reject, 1000, { message: 'You are guest' });
        });
    }
}

// getUser(user => {
//     console.log('user is called');
//     login(user, status => {
//         console.log('login is called');
//         showPage(status, rpage => {
//             console.log('show page is called');
//             console.log(rpage)
//         }, gpage => console.log(gpage));
//     }, err => console.log(err))
// }, err => console.log(err));
getUser()
    .then(user => {
        console.log('user is called');
        login(user).then(status => {
            console.log('login is called');
            showPage(status)
                .then(page => {
                    console.log('show page is called');
                    console.log(page)
                })
                .catch(err => console.log(err))
        }).catch(err => console.log(err))
    })
    .catch(err => console.log(err));

getUser()
    .then(user => {
        console.log('Get user is called', user)
        return login(user)
    })
    .then(status => {
        console.log('login is called', status);
        return showPage(status);
    })
    .then(page => {
        console.log('show page is called', page)
    })
    .catch(err => {
        console.log(err);
    });

getUser()
    .then(user => login(user))
    .then(status => showPage(status))
    .then(page => console.log('show page is called', page))
    .catch(err => {
        console.log(err);
    });



