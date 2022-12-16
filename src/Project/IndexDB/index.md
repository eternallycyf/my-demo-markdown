---
group:
  path: /IndexDB
  title: IndexDB
---

## IndexDB

### index.html

```html
<script type="module">
  import OpenIndexDB from './indexDb.js';
  const DB2 = new OpenIndexDB(
    'db2',
    {
      name: 'db_b2',
      option: {
        // keyPath: 'id',
        autoIncrement: true,
      },
    },
    [
      { keyPath: 'name', name: 'name' },
      { keyPath: 'value', name: 'value' },
    ],
  );
  async function text() {
    await DB2.openDB();
    let arr = Array.from(Array(20)).map((item, i) => ({
      id: i,
      name: `cs_${i}`,
      value: `zh${i}`,
    }));
    DB2.addData(arr);
    DB2.updateDataByKey({ key: 4, id: 3, name: `cs_1`, value: `zh6` });
    const data = await DB2.getDataByKey(4);
    console.log(data);
  }
  text();
  // console.log(DB.openDB());
</script>
```

### indexDb.js

```js
/**
 * 新建或打开数据库
 * @DbName  数据库名称
 * @version  版本
 */

export function openDB(DbName, version = 2) {
  return new Promise((res, rej) => {
    if (
      window.indexedDB ||
      window.mozIndexedDB ||
      window.webkitIndexedDB ||
      window.msIndexedDB
    ) {
      var request = window.indexedDB.open(DbName, version);
      request.onerror = function(event) {
        //失败处理
        rej(new Error('新建数据库失败！'));
      };
      request.onsuccess = function(event) {
        // Do something with request.result!
        res(event.target.result);
      };

      // 新建或更新时触发
      request.onupgradeneeded = function(event) {
        // 保存 IDBDataBase 接口
        var db = event.target.result;

        // 为该数据库创建一个对象仓库
        var objectStore = db.createObjectStore('hyMapJson', {
          keyPath: 'uuid', // 添加主键必须保持唯一
        });

        // 添加其他字段 可选
        objectStore.createIndex('name', 'name', { unique: false });
        objectStore.createIndex('data', 'data', { unique: false });
      };
    } else {
      rej(new Error('当前版本不支持IndexDB'));
    }
  });
}

export function addData(db, name, data) {
  var res = db
    .transaction([name], 'readwrite')
    .objectStore(name)
    .add(data);
  res.onsuccess = function(event) {
    // event.target.result === customer.ssn;
    console.log(event, '‘添加成功！');
  };
}

export function getDataByKey(db, name, key) {
  return new Promise((res, rej) => {
    try {
      var request = db
        .transaction([name], 'readwrite')
        .objectStore(name)
        .get(key);
      request.onsuccess = function(event) {
        // event.target.result === customer.ssn;
        console.log(event, '获取成功！');
        res(request.result);
      };
      request.onerror = function(event) {
        rej(new Error('获取失败'));
      };
    } catch (error) {
      rej(error);
    }
  });
}
/*
 * 删除indexDB数据库
 */
export function deleteDB(dbName) {
  window.indexedDB.deleteDatabase(dbName);
}

class OpenIndexDB {
  constructor(name, storeOption, surfaceOption, version = 2) {
    this.name = name; // 数据库名称
    this.version = version; // 仓库版本
    this.surfaceOption = surfaceOption; // 配置表的其他可查字段 设置后才可通过key查询
    this.storeOption = storeOption; // 设置对象仓库名称和主键key等配置
    //   storeOption.option: {
    //      keyPath: 'mykey' , // 手动设置主键
    //     autoIncrement: true // 自动设置主键 自增 两者选一
    // }
  }
  // 事务提供了三种模式：readonly、readwrite 和 versionchange。
  /**
   * 打开数据库初始数据库
   *
   * @return {Promise}
   * @memberof OpenIndexDB
   */
  async openDB() {
    const _this = this;
    const DB = await new Promise((res, rej) => {
      if (
        window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB
      ) {
        var request = window.indexedDB.open(_this.name, _this.version);

        request.onerror = function(event) {
          //失败处理
          rej(new Error('新建数据库失败！'));
        };
        request.onsuccess = function(event) {
          // Do something with request.result!
          res(event.target.result);
        };

        // 新建或更新时触发
        request.onupgradeneeded = function(event) {
          // 保存 IDBDataBase 接口
          var db = event.target.result;
          // 创建储存的表
          const objectStore = db.createObjectStore(
            _this.storeOption.name,
            _this.storeOption.option ?? {},
          );
          // 创建表的其他字段列
          _this.surfaceOption.forEach(surface => {
            const { name, keyPath, option } = surface;
            objectStore.createIndex(name, keyPath, option ?? { unique: false });
          });
        };
      } else {
        rej(new Error('当前版本不支持IndexDB'));
      }
    });
    if (DB instanceof Error) {
      throw DB;
    }
    this.DB = DB;
    return DB;
  }
  /**
   * 新增数据
   *
   * @param {*} data
   * @return {*}
   * @memberof OpenIndexDB
   */
  addData(data) {
    var customerObjectStore = this.DB.transaction(
      [this.storeOption.name],
      'readwrite',
    ).objectStore(this.storeOption.name);

    if (data instanceof Array) {
      data.forEach(item => {
        var res = customerObjectStore.add(item);
        res.onsuccess = function(event) {
          // event.target.result === customer.ssn;
          console.log(event, '添加成功！');
        };
        res.onerror = function(event) {
          //失败处理
          throw event;
        };
      });
    } else {
      var res = customerObjectStore.add(data);
      res.onsuccess = function(event) {
        // event.target.result === customer.ssn;
        console.log(event, '添加成功！');
      };
      res.onerror = function(event) {
        //失败处理
        throw event;
      };
    }

    return this;
  }

  /**
   * 根据key获取数据库数据
   *
   * @param {*} key
   * @return {Promise}
   * @memberof OpenIndexDB
   */
  async getDataByKey(key) {
    const _this = this;
    const result = await new Promise((res, rej) => {
      try {
        var request = _this.DB.transaction(_this.storeOption.name)
          .objectStore(_this.storeOption.name)
          .get(key);
        request.onsuccess = function(event) {
          res(request.result);
        };
        request.onerror = function(event) {
          rej(new Error('获取失败'));
        };
      } catch (error) {
        rej(error);
      }
    });
    if (result instanceof Error) {
      throw result;
    }

    return result;
  }

  /**
   * 根据key删除数据库数据
   *
   * @param {*} key
   * @return {Promise}
   * @memberof OpenIndexDB
   */
  async deleteDataByKey(key) {
    const _this = this;
    const result = await new Promise((res, rej) => {
      try {
        var request = _this.DB.transaction(
          [_this.storeOption.name],
          'readwrite',
        )
          .objectStore(_this.storeOption.name)
          .delete(key);
        request.onsuccess = function(event) {
          // 删除成功！
          res(request.result);
        };
        request.onerror = function(event) {
          rej(new Error('删除失败'));
        };
      } catch (error) {
        rej(error);
      }
    });

    if (result instanceof Error) {
      throw result;
    }

    return result;
  }
  /**
   *  根据key更新数据库数据
   *  当autoIncrement = true 时无法更新，会向后添加一条相应数据
   * @param {*} data
   * @return {Promise}
   * @memberof OpenIndexDB
   */
  async updateDataByKey(data) {
    const _this = this;
    const result = await new Promise((res, rej) => {
      try {
        var request = _this.DB.transaction(
          [_this.storeOption.name],
          'readwrite',
        )
          .objectStore(_this.storeOption.name)
          .put(data);
        request.onsuccess = function(event) {
          // 更新成功！
          res(request.result);
        };
        request.onerror = function(event) {
          rej(new Error(event));
        };
      } catch (error) {
        rej(error);
      }
    });

    if (result instanceof Error) {
      throw result;
    }

    return result;
  }
}
export default OpenIndexDB;
```
