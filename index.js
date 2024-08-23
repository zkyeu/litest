/*
 * @Author: liliang
 * @Date: 2024-08-22 22:43:32
 * @LastEditors: liliang
 * @LastEditTime: 2024-08-23 14:56:43
 * @FilePath: /package/index.js
 * @Description: 
 */

/**
 * Example problem with existing solution and passing test.
 * See problem 0 in the spec file for the assertion
 * @returns {string}
 */
exports.example = () => 'hello world';

// 删除特定属性
exports.stripPrivateProperties = (givenArr, handleArr) => {
    return handleArr.map((item) => {
        givenArr.forEach((prop) => {
            delete item[prop];
        })
        return item;
    });
};

// 获取属性相同的数据
exports.excludeByProperty = (props = 'deleted', handleArr) => { 
    return handleArr.filter((item) => !item[props]);
};

exports.sumDeep = (handleArr) => {
    return handleArr.map((item) => {
        let sums = 0;
        item.objects.forEach((v) => sums += v.val);
        return {
            objects: sums
        }
    });
};
exports.applyStatusColor = (obj, handleArr) => {
    return handleArr.filter((item) => {
        return Object.values(obj).some((arr) => arr.includes(item.status));
    }).map(item => {
        return {
            ...item,
            color: Object.keys(obj).find(key => obj[key].includes(item.status))
        };
    });
};

exports.createGreeting = (greet, greeting) => {
    // greeting only use sayHelloTo or sayGoodByeTo
  return (name) => greet(greeting, name);
};

exports.setDefaults = (defaults) => {
    return (obj) => {
        for (const key in defaults) {
            if (!(key in obj)) {
                obj[key] = defaults[key];
            }
        }
        return obj;
    }
}

const { services, users } = require('./__tests__/__helpers__/p7');
exports.fetchUserByNameAndUsersCompany = async (name, services) => {
  try {
    const user = (await services.fetchUsers()).find(user => user.name === name);
    
    if (!user) {
      throw new Error('用户不存在');
    }

    const company = await services.fetchCompanyById(user.companyId);
    if (!company) {
      throw new Error('公司不存在');
    }

    const status = await services.fetchStatus();

    return {
      user, 
      company, 
      status, 
    };
  } catch (err) {
    console.error(err);
    throw err; 
  }
};