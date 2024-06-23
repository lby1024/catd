import VirtualList from "./VirtualList";
import VirtualListPro from './VirtualListPro'

type VirtualListType = typeof VirtualList;

interface MenuProps extends VirtualListType {
  Pro: typeof VirtualListPro;
}

const List = VirtualList as MenuProps;
List.Pro = VirtualListPro

export default List;