/* eslint-disable @typescript-eslint/no-empty-interface */
import { AuthStackParamList } from "./../routes/app.routes";
export declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}
