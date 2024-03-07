import dayjs from 'dayjs';
import 'dayjs/locale/en';

const currentDate = new Date();
const formatDate = dayjs(currentDate).locale('en');

export const formattedDate = {
  weekday: formatDate.format('dddd'),
  day: formatDate.format('DD'),
  month: formatDate.format('MMM'),
  year: formatDate.format('YYYY'),
}