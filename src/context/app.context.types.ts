import { MenuItem } from '@/services/TopPages';
import { TopLevelCategory } from '@/services/TopPages';

export interface IAppContext {
  menu: Array<MenuItem>;
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: Array<MenuItem>) => void;
}
