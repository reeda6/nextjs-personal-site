import { ExtendedRecordMap } from 'notion-types/src/maps';
import { getPageTitle } from 'notion-utils';

export const POSTS = {
  'decarbonizing-contstruction': {
    date: new Date('2022-02-13').toDateString(),
    uri: 'Decarbonizing-Construction-f18a9afe97694b578ec3ed44cf19e7cc',
  },
};

// export const EXPERIENCES = {
//   shareview: {
//     date: '2020 - Now',
//     uri: 'shblog/Shareview-CTO-b3f7d62a744d4cb7bd271d25f4790ece',
//   },
//   dispatcher: {
//     date: '2020',
//     uri: 'shblog/Dispatcher-Go-Backend-developer-fa13680ef8324bacb31b773a5f08c3ad',
//   },
//   tresorio: {
//     date: '2019 - 2020',
//     uri: 'shblog/Tresorio-12516126ddb84eb6abc72656731e1f26',
//   },
//   epitech: {
//     date: '2018',
//     uri: 'shblog/Epitech-Teaching-assistant-b8ee49774bd5423ba00a6921c026c1c6',
//   },
//   bilberry: {
//     date: '2018 - 2020',
//     uri: 'shblog/Bilberry-28dc7324b3e24fd6a4475a63c2ac0410',
//   },
// };

export interface PageInfo {
  title: string;
  cover?: string;
  coverPosition?: number;
}

export interface Page extends PageInfo {
  uri: string;
  date: string;
}

export const getPageInfo = (page: ExtendedRecordMap): PageInfo => {
  const info: PageInfo = {
    title: getPageTitle(page),
  };

  const block = Object.values(page.block)[0].value;
  if (block.type === 'page' && block.format?.page_cover) {
    info.coverPosition = block.format.page_cover_position;
    info.cover =
      'https://www.notion.so/image/' +
      encodeURIComponent(block.format.page_cover) +
      '?table=block&id=' +
      block.id;
  }

  return info;
};
