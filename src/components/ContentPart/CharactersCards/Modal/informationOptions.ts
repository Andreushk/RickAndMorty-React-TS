export interface ICharacterDataForModal {
  image: string;
  name: string;
  origin: string;
  status: string;
  location: string;
  species: string;
  gender: string;
}

interface IInformationOption {
  displayTitle: string;
  responseKey: keyof ICharacterDataForModal;
}

export const informationOptions: IInformationOption[] = [
  {
    displayTitle: 'Name:',
    responseKey: 'name',
  },
  {
    displayTitle: 'Origin:',
    responseKey: 'origin',
  },
  {
    displayTitle: 'Status:',
    responseKey: 'status',
  },
  {
    displayTitle: 'Location:',
    responseKey: 'location',
  },
  {
    displayTitle: 'Species:',
    responseKey: 'species',
  },
  {
    displayTitle: 'Gender:',
    responseKey: 'gender',
  },
];
