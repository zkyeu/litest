/*
 * @Author: liliang
 * @Date: 2024-08-22 21:23:43
 * @LastEditors: liliang
 * @LastEditTime: 2024-08-22 22:29:41
 * @FilePath: /package/test.js
 * @Description: 
 */

// 思路：属性值数组为目标数组中对象删除的属性，遍历过程中利用Object的delete即可。
const stripPrivateProperties = (givenArr, handleArr) => {
    return handleArr.map((item) => {
        givenArr.forEach((prop) => {
            delete item[prop];
        })
        return item;
    });
};

let a1 = ['password', 'token'];
let a2 = [
    {
        name: 'stan',
        email: 'stan@smith.test',
        password: 'secret',
        token: '123',
    },
    {
        name: 'fran',
        email: 'sran@smith.test',
        password: 'secret',
        token: '123',
    },
];
// console.log(stripPrivateProperties(a1, a2));

let a3 = [
    { name: 'stan' },
    { name: 'fran' },
    { name: 'peter', deleted: true },
    { name: 'steve', a: 123 },
    { name: 'hayley' },
];
const  filterData = (props = 'deleted', handleArr) => { 
    return handleArr.filter((item) => !item[props]);
};

// console.log(filterData('a', a3));


let a4 = [
    {
        objects: [{ val: 2 }, { val: 1 }, { val: 1 }],
    },
    {
        objects: [{ val: 1 }, { val: 0 }, { val: 4 }],
    },
];
const sumDeep = (obj) => {
    return obj.map((item) => {
        let sums = 0;
        item.objects.forEach((v) => sums += v.val);
        return {
            objects: sums
        }
    });
}

// console.log(sumDeep(a4));


let a5 = {
    red: [404, 400],
    green: [200, 201],
};

let a6 = [
    {
        status: 404,
    },
    {
        status: 200,
    },
    {
        status: 404,
    },
    {
        status: 201,
    },
    {
        status: 400,
    },
    {
        status: 408,
    },
];

const matchData = (obj, handleArr) => {
    
    return handleArr.filter((item) => {
        return Object.values(obj).some((arr) => arr.includes(item.status));
    }).map(item => {
    return {
      ...item,
      color: Object.keys(obj).find(key => obj[key].includes(item.status))
    };
  });
}

// console.log(matchData(a5, a6));

const a7 = { name: '123'};

const addProp = (obj) => {
    if ('subscribed' in obj && !obj.subscribed) return obj;
    obj['subscribed'] = true;
    return obj;
};
// console.log(addProp(a7));
