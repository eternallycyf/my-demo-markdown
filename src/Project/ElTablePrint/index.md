---
group:
  path: /ElTablePrint
  title: ElTablePrint
---

## ElTablePrint

- elementUI-table-打印 pdf-每页都添加一个表头
- 原生 table 只有有 thead 包裹的表头内容 打印时会自动每一个都拥有一个表头
- `PrintTable.vue`
- `import PrintTable from './PrintTable.vue'`
- `<PrintTable>`

```js
<script>
    import { Table } from 'element-ui';
    export default {
        extends: Table,
        mounted() {
            this.$nextTick(function () {
                let thead = this.$el.querySelector('.el-table__header-wrapper thead');
                let theadNew = thead.cloneNode(true);
                this.$el.querySelector('.el-table__body-wrapper table').appendChild(theadNew);
            })
        },
    }
</script>
<style scoped>
    .el-table >>> .el-table__body-wrapper thead {
        display: none;
    }
    @media print {
        .el-table >>> .el-table__header-wrapper {
            display: none;
        }
        .el-table >>> .el-table__body-wrapper thead {
            display: table-header-group;
        }
    }
</style>
```

## ElementUI-table max-height 不能设置百分比和 vh

```js
<script>
    import { Table } from 'element-ui';
    import { parseHeight } from 'element-ui/packages/table/src/util.js';
    export default {
        extends: Table,
        computed: {
            fixedBodyHeight() {
                if (this.height) {
                    return {
                        height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
                    };
                } else if (this.maxHeight) {
                    let maxHeight = parseHeight(this.maxHeight);
                    if (typeof maxHeight === 'number') {
                        maxHeight = this.layout.scrollX ? maxHeight - this.layout.gutterWidth : maxHeight;
                        if (this.showHeader) {
                            maxHeight -= this.layout.headerHeight;
                        }
                        maxHeight -= this.layout.footerHeight;
                        return {
                            'max-height': maxHeight + 'px'
                        };
                    } else if (maxHeight.match(/\d+(vh|%)/g)) {
                        let resHeight = this.layout.scrollX ? `100% - ${this.layout.gutterWidth}px` : "100%";
                        if (this.showHeader) {
                            resHeight = `${resHeight} - ${this.layout.headerHeight}px` ;
                        }
                        resHeight = `${resHeight} - ${this.layout.footerHeight}px`;
                        return {
                            'max-height': `calc(${resHeight})`
                        };
                    }
                }
                return {};
            },
        }
    }
</script>
<style scoped>
  .el-table {
    display: flex;
    flex-direction: column;
  }
  .el-table >>> .el-table__header-wrapper {
    flex-shrink: 0;
  }
  .el-table >>> .el-table__body-wrapper {
    flex-grow: 1;
  }
</style>
```
