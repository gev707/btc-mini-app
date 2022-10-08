import { store } from '../index';
import rootReducer from '../reducers/root-reducer';

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;