import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';

const currentDate = new Date();
const formatDate = dayjs(currentDate).locale('pt-br');

export const formattedDate = {
  weekday: formatDate.format('dddd'),
  day: formatDate.format('DD'),
  month: formatDate.format('MMM'),
  year: formatDate.format('YYYY'),
}