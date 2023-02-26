import { Dropdown, Icon, DropItem, Button, Message} from "catd"

const menu:DropItem[] = [
  {
    key: '0',
    label: '1st menu item'
  }, {
    key: '1',
    label: '2nd menu item',
    disable: true,
    icon: <Icon name='operation' />
  }, {
    key: '2',
    label: '3rd menu item',
  }, {
    key: '3',
    label: 'a danger menu item',
    danger: true
  }
]

export default () => {

  const choose = (item: DropItem) => {
    if(item.danger) Message.error(item.label)
    else Message.info(item.label)
  }

  return <Dropdown menu={menu} onChoose={choose} >
    <Button>Hover me <Icon name="arrow-down-bold"/></Button>
  </Dropdown>
}