export type SetupData = {
  password: boolean,
  accessKey: boolean,
  smptCredentials: boolean,
}

export interface AuthAPI {
  setupData: () => Promise<SetupData>;
}
