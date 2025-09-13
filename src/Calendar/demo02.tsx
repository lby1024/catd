import { Calendar, Message } from 'catd';

export default () => {
  function alert(d: Date) {
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    Message.success(`${year}年${month}月${date}日`);
  }

  function disableDate(date: Date) {
    if (date.getDate() === 3) {
      return true;
    }
    return false;
  }

  return (
    <Calendar
      defaultValue={new Date('2222/2/2')}
      disableDate={disableDate}
      onChange={(d) => alert(d)}
    />
  );
};
