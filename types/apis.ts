export type SetupData = {
  accessKey: boolean,
  smptCredentials: boolean,
}

export interface API {
  setupComplete: () => Promise<SetupData>;
}
