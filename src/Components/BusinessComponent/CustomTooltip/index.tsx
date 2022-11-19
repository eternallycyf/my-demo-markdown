import { Row, Tag } from 'antd';
import CustomTooltip from './CustomTooltip';

const TEXT =
  'AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单方便、专业可靠、不限可能的数据可视化最佳实践。得益于丰富的业务场景和用户需求挑战，AntV 经历多年积累与不断打磨，已支撑整个阿里集团内外 20000+ 业务系统，通过了日均千万级 UV 产品的严苛考验。 我们正在基础图表，图分析，图编辑，地理空间可视化，智能可视化等各个可视化的领域耕耘，欢迎同路人一起前行';
const COLOR_DICT: any = {
  1: 'magenta',
  2: 'red',
  3: 'volcano',
  4: 'orange',
  5: 'gold',
  6: 'lime',
  7: 'green',
  8: 'cyan',
  9: 'blue',
  10: 'purple',
};

const tagS = Array.from({ length: 10 }).map((_, i) => (
  <Tag key={Math.random()} color={COLOR_DICT[~~(Math.random() * 10)]}>
    {COLOR_DICT[~~(Math.random() * 10)]}
  </Tag>
));

const tagS2 = Array.from({ length: 23 }).map((_, i) => (
  <Tag key={Math.random()} color={COLOR_DICT[~~(Math.random() * 10)]}>
    {COLOR_DICT[~~(Math.random() * 10)]}
  </Tag>
));

const IndexPage = () => {
  return (
    <>
      <Row>
        <CustomTooltip
          col={24}
          text={tagS}
          row={{
            rows: 1,
            expend: true,
            EllipsisSymbol: true,
            lineMaxHeight: 22,
          }}
        />
      </Row>
      <Row>
        <CustomTooltip
          col={24}
          text={tagS2}
          row={{
            rows: 1,
            expend: true,
            EllipsisSymbol: true,
            lineMaxHeight: 22,
          }}
        />
      </Row>
      <Row gutter={10}>
        <CustomTooltip text={TEXT} copyable col={3} maxLength={3} />
        <CustomTooltip
          text={TEXT}
          copyable
          col={3}
          row={{ rows: 'autoSize' }}
        />
        <CustomTooltip
          text={TEXT}
          copyable
          col={4}
          row={{ rows: 3, expend: true }}
        />
        <CustomTooltip
          text={TEXT}
          copyable
          col={5}
          row={{ rows: 3, expend: false }}
        />
        <CustomTooltip
          text={TEXT}
          copyable
          col={6}
          row={{ rows: 'autoSize', EllipsisSymbol: false }}
        />
      </Row>
    </>
  );
};
export default IndexPage;