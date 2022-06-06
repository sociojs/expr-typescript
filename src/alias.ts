interface IEmployee {
  id: number;
  name: string;
  phone: string;
}
interface IComplexEmplyee extends IEmployee {
  salary: number;
}
export const Employee: IEmployee = {
  id: 0,
  name: 'Init name',
  phone: 'Init phone',
};

export const ComplexEmployee: IComplexEmplyee = {
  id: 0,
  name: 'Init name',
  phone: 'Init phone',
  salary: 10000,
};
