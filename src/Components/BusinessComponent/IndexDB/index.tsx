interface IBaseIndexDB {
  name: string;
  version: number;
  storeOp: {
    storeName: string;
    option: IDBObjectStoreParameters;
  };
  surfaceOption: {
    name: string;
    keyPath: string;
    option: IDBIndexParameters;
  }[];
}

class OpenIndexDB<ICreateIndexDB> {
  constructor(name, version = 2, storeOp, surfaceOption) {
    this.name = name;
    this.version = version;
  }

  async openDB({ storeName, option }, surfaceOption = []) {
    const DB = await new Promise((res, rej) => {
      if (
        window.indexedDB ||
        window.mozIndexedDB ||
        window.webkitIndexedDB ||
        window.msIndexedDB
      ) {
        var request = window.indexedDB.open(this.name, this.version);
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
          const objectStore = db.createObjectStore(storeName, option ?? {});
          // 创建表的其他字段列
          surfaceOption.forEach(surface => {
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
    return this;
  }

  addData(name, data) {
    var res = this.DB.transaction([name], 'readwrite')
      .objectStore(name)
      .add(data);
    res.onsuccess = function(event) {
      // event.target.result === customer.ssn;
      console.log(event, '添加成功！');
    };
    res.onerror = function(event) {
      //失败处理
      throw event;
    };
    return this;
  }

  async getDataByKey(data) {
    const result = await new Promise((res, rej) => {
      try {
        var request = this.DB.transaction([this.name], 'readwrite')
          .objectStore(this.name)
          .get(data);
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
}

export default OpenIndexDB;
