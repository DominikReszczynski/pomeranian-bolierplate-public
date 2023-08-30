import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { ReactRouterEventsMetaData } from './ReactRouterEvents/router-data';
import { Block09MetaData } from './Block09/router-data';
import { MaterialUIBasicElementMetaData } from './MaterialUIBasicElement/router-data';
import { SwagerMetaData } from './Swager/router-data';
import { TodoWithServerMetaData } from './TodoWithServer/router-data';
import { ReactUseRefMetaData } from './ReactUseRef/router-data';
import { FormsMetaData } from './Forms/router-data';
import { Forms2MetaData } from './Forms2/router-data';
import { TodoListTestMetaData } from './todoTest/router-data';
import { ReduxTestMetaData } from './ReduxTest/router-data';

export const blockRouterMetaData = [
  ReactRouterEventsMetaData,
  Block09MetaData,
  MaterialUIBasicElementMetaData,
  SwagerMetaData,
  TodoWithServerMetaData,
  ReactUseRefMetaData,
  FormsMetaData,
  Forms2MetaData,
  TodoListTestMetaData,
  ReduxTestMetaData
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
