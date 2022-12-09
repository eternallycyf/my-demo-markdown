declare global {
  interface Window {
    mozIndexedDB: IDBFactory;
    webkitIndexedDB: IDBFactory;
    msIndexedDB: IDBFactory;
  }
}

interface IIndexDBRequest extends IDBRequest {
  onupgradeneeded: IDBOpenDBRequest['onupgradeneeded'];
  onblocked: IDBOpenDBRequest['onblocked'];
}

type NonNullableDeep<T> = {
  [key in keyof T]: NonNullable<T[key]>;
};

/**
 * 新建/打开数据库
 * @param {string} DatabaseName 数据库名称
 * @param {number} [version = 2] 版本
 * @returns {Promise<IDBDatabase>}
 */
export function openDB(DatabaseName: string, version = 2) {
  if (
    !window.indexedDB &&
    !window.mozIndexedDB &&
    !window.webkitIndexedDB &&
    !window.msIndexedDB
  ) {
    return Promise.reject('当前浏览器版本不支持IndexDB');
  }

  return new Promise((resolve, reject) => {
    var request: IIndexDBRequest = window.indexedDB.open(DatabaseName, version);

    request.onerror = function(e) {
      reject(new Error('新建数据库失败！' + e.target));
    };
    request.onsuccess = function(e) {
      const target = e.target as typeof e.target & { result: IDBDatabase };
      resolve(target.result);
    };

    request.onupgradeneeded = function(e) {
      const target = e.target as typeof e.target & { result: IDBDatabase };
      var db = target.result;

      var objectStore = db.createObjectStore('hyMapJson', {});

      objectStore.createIndex('name', 'name', { unique: false });
      objectStore.createIndex('data', 'data', { unique: false });
    };
  });
}

/**
 * 添加表
 * @param {IDBDatabase} db 实例
 * @param {string} name 表名
 * @param {any} data 数据
 */
export function addData(db: IDBDatabase, name: string, data: any) {
  var res = db
    .transaction([name], 'readwrite')!
    .objectStore(name)
    .add(data);
  res.onsuccess = function(event) {
    // event.target.result === customer.ssn;
    console.log(event, '‘添加成功！');
  };
}

/**
 *
 * @param {IDBDatabase} db 实例
 * @param {string} name
 * @param {string} key
 * @returns {Promise<any>} result
 */
export function getDataByKey(db: IDBDatabase, name: string, key: string) {
  if (!db) return Promise.reject('数据库不存在');

  return new Promise((resolve, reject) => {
    var request = db
      .transaction([name], 'readwrite')
      .objectStore(name)
      .get(key);
    request.onsuccess = function(e) {
      // event.target.result === customer.ssn;
      console.log(exports, '获取成功！');
      resolve(request.result);
    };
    request.onerror = function(event) {
      reject(new Error('获取失败'));
    };
  });
}

/**
 * 删除数据库
 * @param DatabaseName
 */
export function deleteDB(DatabaseName: string) {
  window.indexedDB.deleteDatabase(DatabaseName);
}
